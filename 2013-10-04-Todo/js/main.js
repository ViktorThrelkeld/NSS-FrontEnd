'use strict';
$(document).ready(initialize);

function initialize(){
  $('#addtask').click(addTask);
  $('table').on('click', '.nuke', nuke);
  $('table').on('click', '.up, .down', move);
  $('table').on('click', '.check', strike)
}

function strike(){
  var $strike = $(this);
  if($strike.prop('checked')){
    $strike.parent().parent().addClass('strike');
  }
  else{
    $strike.parent().parent().removeClass('strike');
  }
}

function move(){
  var $img = $(this);
  var $tr = $img.parent().parent();

  if($tr.hasClass('up')){
    if(!$tr.prev().hasClass('home')){
      $tr.prev().after($tr);
    }
  }else{
    $tr.next().after($tr);
  }
}

function nuke(){
  var $nuke = $(this);
  var $tr = $nuke.parent().parent();
  $tr.remove();
}

function addTask(){

  var $tr = $('<tr>');

  var $duedate = $('<td>');
  $duedate.addClass('duedate');
  $duedate.text($('#duedate').val());

  var $task = $('<td>');
  $task.addClass('task');
  $task.text($('#task').val());

  var $color = $('<td>');
  $color.addClass('color');
  var $backGndColor = $('#color').val();
  $color.css('background-color', $backGndColor);

  var $done = $('<td>');
  $done.addClass('done');
  var $checkbox = $('<input>');
  $checkbox.attr('type', 'checkbox');
  $checkbox.addClass('check');
  $done.append($checkbox);

  var $remove = $('<td>');
  $remove.addClass('remove');
  var $nuke = $('<input>');
  $nuke.attr('type', 'button');
  $nuke.val('Remove!');
  $nuke.addClass('nuke');
  $remove.append($nuke);

  var $updown = $('<td>');
  $updown.addClass('updown');
  var $uparrow = $('<img>');
  $uparrow.attr('src', 'images/up.png');
  $uparrow.addClass('up');
  var $downarrow = $('<img>');
  $downarrow.attr('src', 'images/down.png');
  $downarrow.addClass('down');
  $updown.append($uparrow, $downarrow);


  $tr.append($duedate, $task, $color, $done, $remove, $updown);
  $('table').append($tr);

  $('#duedate').val('').focus();
  $('#task').val('');
  $('#color').val('');

}