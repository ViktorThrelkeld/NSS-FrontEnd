'use strict';
$(document).ready(initialize);


function initialize(){
  $('#setlogo').click(setLogo);
  $('#setbalance').click(setBalance);
  $('#depositbutton').click(makeDeposit);
  $('#withdrawlbutton').click(makeWithdrawl);
}

function setLogo(){
  var httpinput = $('#httpinput').val();
  $('#logo').attr('src', httpinput);
  clearInput();
}

function setBalance(){
  var startbalance = $('#balanceinput').val();

  $('#balance').text(startbalance);
}


function makeDeposit(){
  var existingbalance = $('#balance').text();
  existingbalance = parseInt(existingbalance);
  var deposit = $('#amount').val();
  deposit = parseInt(deposit,10);
  existingbalance += deposit;
  $('#balance').text(existingbalance);
  depositList(deposit);
}

function makeWithdrawl(){
  var existingbalance = $('#balance').text();
  existingbalance = parseInt(existingbalance);
  var withdrawl = $('#amount').val();
  withdrawl = parseInt(withdrawl,10);
  existingbalance -= withdrawl;
  $('#balance').text(existingbalance);
  withdrawlList(withdrawl);
}

function clearInput(){
  $('#httpinput').val('');
  $('#httpinput').focus();
}

function depositList(input){
  var $newdeposit = $('<div>');
  $newdeposit.text(input);
  $(depositlist).prepend($newdeposit)
}

function withdrawlList(input){
  var $newwithdrawl = $('<div>');
  $newwithdrawl.text(input);
  $(withdrawllist).prepend($newwithdrawl);

}