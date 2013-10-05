'use strict';

$(document).ready(initialize);

function initialize(){
    $('#add').click(addRow);
    $('table').on('click', '.rsvp', rsvp);
    $('table').on('click', '.nuke', nuke);
    $('table').on('click', '.upimg, .downimg', move);

  }
function move(){
  var $img = $(this);
  var $tr = $img.parent().parent();

  if($img.hasClass('up')){
    if(!$tr.prev().hasClass('home')){
      $tr.prev().before($tr);
    }
  }else{
    $tr.next().after($tr);
  }

}



function downimg(){
  var $downimg = $(this);
}

function nuke(){
  var $nuke = $(this);
  var $tr = $nuke.parent().parent();
  $tr.remove();
}

function rsvp(){
  var $button = $(this);
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];
  var $nameTD = $button.parent().prev().prev();
  var $foodTD = $button.parent().siblings('.food');
  $nameTD.text(name);
  $foodTD.text(food);


}

function addRow(){
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');
  var $nuke = $('<td>');
  var $updown = $('<td>');
  $updown.addClass('updown');

  var $upimg = $('<img>');
  $upimg.attr('src', 'images/up.jpg');
  $upimg.addClass('upimg');

  var $downimg = $('<img>');
  $downimg.attr('src', 'images/down.jpg');
  $downimg.addClass('downimg');


  var $input = $('<input>');
  $input.attr('type', 'text');



  var $button = $('<input>');
  $button.attr('type', 'button');
  $button.val('RSVP!');
  $button.addClass('rsvp');


  var $nukebutton = $('<input>');
  $nukebutton.attr('type', 'button');
  $nukebutton.val('NUKE!');
  $nukebutton.addClass('nuke');

  $updown.append($upimg, $downimg);
  $ctrl.append($input, $button);
  $nuke.append($nukebutton);
  $tr.append($name, $food, $ctrl, $nuke, $updown);
  $('table').append($tr);


  $input.focus();
}