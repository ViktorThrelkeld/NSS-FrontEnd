$(document).ready(initialize);

function initialize()
{
  $('#addcolor').click(boxmaker);
}

function boxmaker()
{
  var $color = $('#color').val();
  var $div = $('<div>');
  $div.css('background-color', $color);
  $div.addClass('box');


  $('#colors').prepend($div);
  clearInputAndFocus();
}

function clearInputAndFocus()
{
  $('#color').val('');
  $('#color').focus();
}

