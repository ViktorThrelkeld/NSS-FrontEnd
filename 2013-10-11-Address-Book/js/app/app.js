'use strict';
//Database Schema
var Δdb;
var Δpeople;

//Local Schema
var db  = {};
db.people = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://address-book-bt.firebaseio.com/');
  Δpeople = Δdb.child('people');
  Δpeople.on('child_added', personAdded);

  $('#add').click(addPerson);
}

function personAdded(person){
  person = person.val();
  db.people.push(person);

  viewPersonAdded(person);
}

function viewPersonAdded(person){
  var ul = '<ul class ="person"><li class="pic"><img class="img"></li><li class="name"></li><li class="address"></li><li class="web"></li><li class="email"><a class="mail"></a></li></ul>';
  var $ul = $(ul);

  $ul.children('.pic').children('.img').attr('src', person.pic);
  $ul.children('.name').text(person.name);
  $ul.children('.address').text(person.address);
  $ul.children('.web').text(person.web);
  $ul.children('.email').children('.mail').attr('href', 'mailto:' + person.email).text(person.email);

  $('#peeps').append($ul);
}

function addPerson(){
  var name = $('#name').val();
  var address = $('#address').val();
  var web = $('#web').val();
  var email = $('#email').val();
  var pic = $('#pic').val();


  var person = {};
  person.name = name;
  person.address = address;
  person.web = web;
  person.email = email;
  person.pic = pic;
  Δpeople.push(person);


  $('#name').val('');
  $('#address').val('');
  $('#web').val('');
  $('#email').val('');
  $('#pic').val('');
}
