'use strict';

//Firebox Schema
var Δdb;
var Δbalance;
var Δstocks;

//Local Schema

var db = {};
db.balance = {};
db.balance.total = 0;
db.balance.stock = 0;//wrong
db.balance.cash = 0;
db.stocks = [];
db.stock = {};

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-bt.firebaseio.com/');
  Δbalance = Δdb.child('balance');
  Δstocks = Δdb.child('stocks');
  Δbalance.on('value', balanceChanged);
  Δstocks.on('child_added', stockAdded);

  $('#setFunds').click(setFunds);
  $('#buy').click(purchase);
  // $('#setInterval').click(setInterval);
  // getStockQuote();
}
function balanceChanged(snapshot){
  var balance = snapshot.val();
  db.balance = balance;
  $('#totalFunds').text('$' + db.balance.cash);

}

// timer = setInterval(, delay);{

// }

function setFunds(){
  var amount = parseFloat($('#funds').val(), 10);
  $('#totalFunds').text('$' + db.balance.cash);
  var balance = {};
  balance.total = amount;
  balance.cash = amount;
  balance.stock = amount;//this is wrong
  Δbalance.set(balance);
}


function purchase(){
  var symbol = $('#symbol').val();
  var quantity = $('#quantity').val();
  quantity = parseInt(quantity, 10);

  requestQuote(symbol, function(data, textStatus, jqXHR){
    var quote = data.Data;

    if(quote.LastPrice * quantity <= db.balance.cash){
      db.balance.cash -= quote.LastPrice * quantity;
      db.balance.stock += quote.LastPrice * quantity;
      db.balance.total = db.balance.cash + db.balance.stock;
      Δbalance.set(db.balance);
      var stock = {};
      stock.name = quote.Name;
      stock.symbol = symbol;

      stock.purchasePrice = quote.LastPrice;
      stock.quantity = quantity;
      Δstocks.push(stock);
    }
    console.log(data);

    $('#symbol').val('');
    $('#quantity').val('');
  });
}

function requestQuote(symbol, fn){
  var data = {symbol: symbol};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
}

function stockAdded(snapshot){
  var stock = snapshot.val();

  createRow(stock);
}


function createRow(stock){
  var row = '<tr><td class = "name"></td><td class = "symbol"></td><td class = "quote"></td><td class = "purchased"></td><td class = "total"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(stock.name);
  $row.children('.symbol').text(stock.symbol);
  $row.children('.quote').text(stock.purchasePrice);
  $row.children('.purchased').text(stock.quantity);
  $row.children('.total').text((stock.purchasePrice) * (stock.quantity));

  $('#stockList').append($row);
  console.log(stock);
}

