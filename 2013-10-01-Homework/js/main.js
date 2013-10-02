$(document).ready(initialize);
debugger;

function initialize()
{
  $('#calculate').click(pull);
}

function array_converter(x, y)
{
  x = parseInt(x);
  y = parseInt(y);
  var z = x + 1;
      z = _.range(z);
      z =_.rest(z);
  for(var i = 0; i < z.length; i++)
  {
       z[i] = y * z[i];
  }

  var multiplied_string = z.join(', ');
  return multiplied_string;
}

function pull()
{
  var string = $('#input').val();
  string = string.split(', ');
  string = array_converter(string);
  $('#answer').text(string);
}