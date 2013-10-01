$(document).ready(initialize);

function change_div_text()
{
  var name = $('#name').val();
  var color = $('#color').val();
  $('#b').text(name).css('background-color', color);
}

function age_verification()
{
  debugger;
  var age = $('#age').val();
    age = parseInt(age);
  if(age < 21)
    $('#age_div').text('no drink for you').css('background-color', 'red');

  else
    $('#age_div').text('more please').css('background-color', 'green');



}


function initialize(){
  $('#clicker').click(change_div_text);
  $('#age_check').click(age_verification);




  // $('div').css('background-color', 'red');
  // $('div').css('font-size', '25px');
  // $('div').css('color', 'yellow');

  // var color = prompt('What color do you want?');
  // $('div').css('background-color', color);
  // var size = prompt('What font-size do you want?');
  // $('div').css('font-size', size);

  // var selector = prompt('which div?');
  // var cls = prompt('class to add?');
  // var new_text = prompt('what would you like to say?');
  // $(selector).addClass(cls);
  // $(selector).text(new_text);

  // var selector_to_hide = prompt('which node do you want to hide?');
  // $(selector_to_hide).hide();

}