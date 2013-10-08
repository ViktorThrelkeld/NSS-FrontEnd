'use strict';
var timer = 0;


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#start').click(start);
  $('#stop').click(stop);

}

function start(){

  var delay = parseFloat($('#delay').val(), 10);
  delay *= 1000;
  timer = setInterval(createBoxes, delay);
}

function createBoxes(){
  var dimensions = $('#dimensions').val();
  dimensions = dimensions.split(', ');
  var width = dimensions[0];
  var height = dimensions[1];

  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var alpha = Math.random();
  var rgba = 'rgba(' + red + ' , ' + green + ', ' + blue + ', ' + alpha + ')';




  var $color = $('<div>');
  $color.addClass('color');
  $color.css('width', width);
  $color.css('height', height);
  $color.css('background-color', rgba);
  $('#colors').prepend($color);
}

function stop(){
  clearInterval(timer);
}
