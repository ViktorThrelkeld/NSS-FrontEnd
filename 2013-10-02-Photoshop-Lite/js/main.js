'use strict';
$(document).ready(initialize);

function initialize(){
  $('#addcolor').click(addColor);
  $('#add_box').click(addBox);
  // $('.box').click(boxClicked);
  // $('parent_selector').on('name of event', 'child selector', name of function);
  $('#colors').on('click', '.box', boxClicked);
  $('#boxes').on('mouseover', '.lilboxes', boxHover);

}

function boxHover()
{
  var $canvas = $(this);
  var brushColor = $('#brush').css('background-color');
  $canvas.css('background-color', brushColor);
}

function addBox(){
  var amount = $('#amount').val();
  amount = parseInt(amount,10);
  for(var i = 0; i < amount; i++)
  {
    var $div = $('<div>');
    $div.addClass('lilboxes');
    $('#boxes').prepend($div);
  }
}

function boxClicked(){
  var $box = $(this);
  var color = $box.css('background-color');
  $('#brush').css('background-color', color);
  // alert('the box clicked is ' + color);

}

function addColor(){
  var $color = $('#color').val();
  var $div = $('<div>');
  $div.css('background-color', $color);
  $div.addClass('box');
  $('#colors').prepend($div);
  clearInputAndFocus();
}



function clearInputAndFocus(){
  $('#color').val('');
  $('#color').focus();
}

