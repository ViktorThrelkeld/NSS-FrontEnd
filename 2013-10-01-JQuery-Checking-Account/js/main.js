$(document).ready(initialize);

var balance = 1000;
// debugger;
function deposit(balance, x){
  return balance + x;
}

function withdrawl(balance, x){
  return balance - x;
}

function initialize(){
 $('#deposit').click(orig_amountdep);
 $('#withdrawl').click(orig_amountwith);
}

function orig_amountdep(){
  var orig = $('#amount').val();
  orig = parseInt(orig);
  balance = deposit(balance, orig);
  $('#balance').text('$' + balance + '.00');
  if(balance >= 0)
    $('#balance').removeClass('negative');
}

function orig_amountwith(){
  var orig = $('#amount').val();
  orig = parseInt(orig);
  balance = withdrawl(balance, orig);
  $('#balance').text('$' + balance + '.00');
  if(balance <= 0)
    $('#balance').addClass('negative');
}

