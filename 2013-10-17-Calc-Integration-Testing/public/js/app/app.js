'use strict';


$(document).ready(initialize);

function initialize(fn, flag){
  if (!canRun(flag)) {return;}

  $(document).foundation();
  $('#calculate').click(clickCalculate);
}

// // -------------------------------------------------------------------- //
// // -------------------------------------------------------------------- //
// // -------------------------------------------------------------------- //

function clickCalculate(){
  var op1 = getValue('#op1');
  var op2 = getValue('#op2');
  var operator = getValue('#operator');
  var computation = op1 + operator + op2;
  var result = eval(computation);
  htmlUpdateResult(result);
  htmlAddToPaperTrail(op1, operator, op2, result);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlUpdateResult(result){
  $('#result').text(result);
}

function htmlAddToPaperTrail(op1, operator, op2, result){
  var $li = $('<li>');
  var spans = '<span class="op1">' + op1 + '</span><span class="operator">' + operator + '</span><span class="op2">' + op2 + '</span><span class="equal">=</span><span class="result">' + result + '</span>';
  var $spans = $(spans);
  $li.append($spans);
  $('#history').prepend($li);

}




// // -------------------------------------------------------------------- //
// // -------------------------------------------------------------------- //
// // -------------------------------------------------------------------- //


function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !==undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}