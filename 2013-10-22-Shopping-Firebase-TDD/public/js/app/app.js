'use strict';

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

// Firebase Schema
var Δdb;
var Δproducts;
var Δcustomers;
var Δorders;

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  initializeSchema();
  initializeDatabase();
  turnHandlersOn();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initializeSchema(){
  db.constants = {};
  db.constants.domesticShipping = 0.50;
  db.constants.internationalShipping = 1.50;

  db.products = [];
  db.customers = [];
  db.orders = [];

  db.pagination = {};
  db.pagination.perPage = 5;
  db.pagination.currentPage = 1;
  db.pagination.currentRowCount = 0;

  db.cart = new Cart();
}

function initializeDatabase(){
  Δdb = new Firebase(db.keys.firebase);
  Δproducts = Δdb.child('products');
  Δcustomers = Δdb.child('customers');
  Δorders = Δdb.child('orders');

  Δproducts.on('child_added', dbProductAdded);
  Δcustomers.on('child_added', dbCustomerAdded);
  Δorders.on('child_added', dbOrderAdded);
}

function turnHandlersOn(){
  $('#add-product').on('click', clickAddProduct);
  $('#add-customer').on('click', clickAddCustomer);
  $('#next').on('click', clickNavigation);
  $('#previous').on('click', clickNavigation);
  $('#products').on('click', 'img', clickAddItemToCart);
  $('#select-customer').on('change', changeCustomer);
  $('#purchase').on('click', clickAddPurchase);
  $('table').on('click', '.nuke', clickNuke);
}

function turnHandlersOff(){
  $('#add-product').off('click');
  $('#add-customer').off('click');
  $('#next').off('click');
  $('#previous').off('click');
  $('#products').off('click');
  $('#select-customer').off('change');
  $('#purchase').off('click');
  $('table').off('click', '.nuke');
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
function clickAddItemToCart(){
  if(db.cart.customer){
    var name = $(this).parent().next().text();
    var product = _.find(db.products, function(p){return p.name === name;});
    db.cart.products.push(product);
    htmlAddItemToCart(product);
    htmlUpdateCartTotals();
  }
}


function changeCustomer(){
  var name = this.value;
  var customer = _.find(db.customers, function(c){return c.name === name;});
  db.cart.customer = customer;
}


function clickAddCustomer(){
  var image = getValue('#customer-image');
  var name = getValue('#customer-name');
  var isDomestic = $('input[name="address"]:checked').val() === 'domestic';
  htmlResetRadioButtons();

  var customer = new Customer(image, name, isDomestic);
  Δcustomers.push(customer);
  // var isDomestic = $('#domestic')[0].checked;
  // var isInternational = $('#international')[0].checked;
  // $('#domestic')[0].checked = false;
  // $('#international')[0].checked = false;
}



function clickAddProduct(){
  var image = getValue('#product-image');
  var name = getValue('#product-name');
  var weight = getValue('#product-weight', parseFloat);
  var price = getValue('#product-price', parseFloat);
  var off = getValue('#product-off', parseFloat) / 100;


  var product = new Product(image, name, weight, price, off);
  delete product.salePrice;
  Δproducts.push(product);
}

function clickNavigation(){
  db.pagination.currentRowCount = 0;
  htmlEmptyProductRows();

  var isPrevious = this.id === 'previous';
  db.pagination.currentPage += isPrevious ? -1 : +1;
  // if(this.id === 'previous'){
  //   db.pagination.currentPage--;
  // }else{db.pagination.currentPage++;
  // }

  var startIndex = db.pagination.perPage * (db.pagination.currentPage - 1);
  var endLength = (startIndex + db.pagination.perPage) > db.products.length ? db.products.length : startIndex + db.pagination.perPage;
  // var endLength = {};
  // if(( startIndex + db.pagination.perPage) > db.products.length){
  //   endLength = db.products.length;
  // }else{
  //   endLength = startIndex + db.pagination.perPage;
  // }

  var isLess = startIndex > 0;
  var isMore = db.products.length > endLength;

  htmlShowHideNavigation('#previous', isLess);
  htmlShowHideNavigation('#next', isMore);

  for(var i = startIndex; i < endLength; i++){
    htmlAddProduct(db.products[i]);
  }
}

function clickAddPurchase(){
  if(db.cart.customer){
    var products = _.map(db.cart.products, function(p){return {id: p.id, image: p.image, name: p.name, off: p.off, price: p.price, weight: p.weight};});
    var order = new Order(null, null, db.cart.customer, products, db.cart.totals.amount(), db.cart.totals.shipping(), db.cart.totals.grand());
    Δorders.push(order);

    db.cart = new Cart();
    // htmlResetCart();
    $('#cart tbody').empty();
    $('#cart tfoot td').empty();
    $('#select-customer option:last').attr('selected', true);

  }
}

function clickNuke(){
  var $button = $(this);
  var $tr = $button.parent().parent();
  $tr.remove();
  // db.cart = new Cart();
  // htmlUpdateCartTotals();
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// db functions

function dbCustomerAdded(snapshot){
  var obj = snapshot.val();
  var customer = new Customer(obj.image, obj.name, obj.isDomestic);
  customer.id = snapshot.name();
  db.customers.push(customer);
  htmlAddCustomerToSelect(customer);
}

function dbProductAdded(snapshot){
  var obj = snapshot.val();
  var product = new Product(obj.image, obj.name, obj.weight, obj.price, obj.off);
  product.id = snapshot.name();
  db.products.push(product);
  if(db.pagination.currentRowCount < db.pagination.perPage){
    htmlAddProduct(product);
  } else {
    htmlShowHideNavigation('#next', true);
  }
}

function dbOrderAdded(snapshot){
  var obj = snapshot.val();

  var customer = new Customer(obj.customer.image, obj.customer.name, obj.customer.isDomestic);
  customer.id = obj.customer.id;

  var products = _.map(obj.products, function(p){
    var product = new Product(p.image, p.name, p.weight, p.price, p.off);
    product.id = p.id;
    return product;
  });

  var order = new Order(snapshot.name(), obj.time, customer, products, obj.total, obj.shipping, obj.grand);

  db.orders.push(order);
  htmlAddOrderToTable(order);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// html functions

function htmlAddCustomerToSelect(customer){
  var $option = $('<option>');
  $option.text(customer.name);
  $option.val(customer.name);
  $('#select-customer').prepend($option);

}

function htmlAddProduct(product){
  db.pagination.currentRowCount++;
  var tr = '<tr class="product"><td class="product-image"><img src="/img/' + product.image + '"></td><td class="product-name">' + product.name + '</td><td class="product-weight">' + product.weight + ' lbs</td><td class="product-price">' + formatCurrency(product.price) + '</td><td class="product-off">' + product.off + '</td><td class="product-sale">' + formatCurrency(product.salePrice()) + '</td><td class="product-nuke"></td></tr>';
  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('Nuke');
  $nukeButton.addClass('nuke');
  var $tr = $(tr);
  $tr.children('.product-nuke').append($nukeButton);

  $('#products').append($tr);
}

function htmlShowHideNavigation(selector, shouldShow){
  $(selector).removeClass('hidden');

  if(!shouldShow){
    $(selector).addClass('hidden');
  }
}

function htmlEmptyProductRows(){
  $('.product').remove();
}

function htmlResetRadioButtons(){
  $('input[name="address"]:checked')[0].checked = false;
}

function htmlAddItemToCart(product){
  var count, $tr, tr;
  var $tds = $('#cart tbody .product-name');
  var foundTd = _.find($tds, function(td){return td.innerText === product.name;});

  if(foundTd){
    count = parseInt($(foundTd).next().text(), 10);
    count++;
    $tr = $(foundTd).parent();
  } else {
    count = 1;
    tr = '<tr><td class="product-name"></td><td class="product-count"></td><td class="product-amount"></td><td class="product-weight"></td><td class="product-shipping"></td><td class="product-grand"></td><td class="product-nuke"></td></tr>';
    $tr = $(tr);
    $('#cart tbody').append($tr);
  }

  var amount = product.salePrice() * count;
  var weight = product.weight * count;
  var shipping = weight * (db.cart.customer.isDomestic ? db.constants.domesticShipping : db.constants.internationalShipping);
  var grand = amount + shipping;
  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('Nuke');
  $nukeButton.addClass('nuke');

  $tr.children('.product-name').text(product.name);
  $tr.children('.product-count').text(count);
  $tr.children('.product-amount').text(formatCurrency(amount));
  $tr.children('.product-weight').text(weight.toFixed(2) + ' lbs');
  $tr.children('.product-shipping').text(formatCurrency(shipping));
  $tr.children('.product-grand').text(formatCurrency(grand));
  $tr.children('.product-nuke').append($nukeButton);
}

function htmlUpdateCartTotals(){
  $('#cart-count').text(db.cart.totals.count());
  $('#cart-amount').text(formatCurrency(db.cart.totals.amount()));
  $('#cart-weight').text(db.cart.totals.weight().toFixed(2) + ' lbs');
  $('#cart-shipping').text(formatCurrency(db.cart.totals.shipping()));
  $('#cart-grand').text(formatCurrency(db.cart.totals.grand()));
}

function htmlAddOrderToTable(order){
  var tr = '<tr><td class="order-id"></td><td class="order-time"></td><td class="order-customer"></td><td class="order-products"><ol class="order-products-list"></ol></td><td class="order-total"></td><td class="order-shipping"></td><td class="order-grand"></td><td class="order-nuke"></td></tr>';
  var $tr = $(tr);

  var $lis = _.map(order.products, function(p){return $('<li>').text(p.name);});

  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('Nuke');
  $nukeButton.addClass('nuke');

  $tr.children('.order-id').text(order.id);
  $tr.children('.order-time').text(order.time);
  $tr.children('.order-customer').text(order.customer.name);
  $tr.find('.order-products-list').append($lis);
  $tr.children('.order-total').text(formatCurrency(order.total));
  $tr.children('.order-shipping').text(formatCurrency(order.shipping));
  $tr.children('.order-grand').text(formatCurrency(order.grand));
  $tr.children('.order-nuke').append($nukeButton);
  $('#orders').append($tr);
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// constructor

function Customer(image, name, isDomestic){
  this.image = image;
  this.name = name;
  this.isDomestic = isDomestic;

}

function Product(image, name, weight, price, off){
  this.image = image;
  this.name = name;
  this.weight = weight;
  this.price = price;
  this.off = off;
  this.salePrice = function(){return this.price - (this.price * this.off);};
}

function Cart(){
  var save = this;
  this.customer = null;
  this.products = [];
  this.totals = {};
  this.totals.count = function(){return save.products.length;};
  this.totals.amount = function(){return _.reduce(save.products, function(memo, product){return memo + product.salePrice();}, 0);};
  this.totals.weight = function(){return _.reduce(save.products, function(memo, product){return memo + product.weight;}, 0);};
  this.totals.shipping = function(){return this.weight() * (save.customer.isDomestic ? db.constants.domesticShipping : db.constants.internationalShipping);};
  this.totals.grand = function(){return this.amount() + this.shipping();};
}

function Order(id, time, customer, products, total, shipping, grand){
  this.id = id || null;
  this.time = time || moment().format('MMMM Do YYYY, h:mm:ss a');
  this.customer = customer;
  this.products = products;
  this.total = total;
  this.shipping = shipping;
  this.grand = grand;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// misc


function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function formatCurrency(number){
  return '$' + number.toFixed(2);
}
