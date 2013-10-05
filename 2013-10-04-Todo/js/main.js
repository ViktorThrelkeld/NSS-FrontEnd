'use strict';
$(document).ready(initialize);

function initialize(){
  $('#addtask').click(addTask);
  $('table').on('click', '.nuke', nuke);
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
  $done.append($checkbox);

  var $remove = $('<td>');
  var $nuke = $('<input>');
  $nuke.attr('type', 'button');
  $nuke.val('Remove!');
  $nuke.addClass('nuke');
  $remove.append($nuke);

  var $updown = $('<td>');
  $updown.addClass('updown');

  $tr.append($duedate, $task, $color, $done, $remove, $updown);
  $('table').append($tr);


}