'use strict';
$(document).ready(initialize);


function initialize(){
  $('#setlogo').click(setLogo);
  $('#setbalance').click(setBalance);
  $('#depositbutton').click(makeDeposit);
  $('#withdrawlbutton').click(makeWithdrawl);
  $('#depositlist').on('click','li', removeDeposit);
  $('#withdrawllist').on('click','li', removeWithdrawl);
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
  var existingbalance = pull();
  var deposit = $('#amount').val();
  deposit = parseInt(deposit,10);
  existingbalance += deposit;
  $('#balance').text(existingbalance);
  depositList(deposit);
}

function makeWithdrawl(){
  var existingbalance = pull();
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
  var $newdeposit = $('<li>');
  $newdeposit.addClass('green');
  $newdeposit.text(input);
  $(depositlist).append($newdeposit)
}

function pull(){
  var existingbalance = $('#balance').text();
  existingbalance = parseInt(existingbalance);
  return existingbalance

}

function withdrawlList(input){
  var $newwithdrawl = $('<li>');
  $newwithdrawl.addClass('red');
  $newwithdrawl.text(input);
  $(withdrawllist).append($newwithdrawl);
}

function removeDeposit(){
  var $item = $(this);
  var info = $item.text();
  info = parseInt(info,10);
  var existingbalance = pull();
  existingbalance -= info;
  $('#balance').text(existingbalance);
  $item.remove();

}


function removeWithdrawl(){
  var $item = $(this);
  var info = $item.text();
  info = parseInt(info,10);
  var existingbalance = pull();
  existingbalance += info;
  $('#balance').text(existingbalance);
  $item.remove();
}

