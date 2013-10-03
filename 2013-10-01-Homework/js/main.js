$(document).ready(initialize);
// debugger;

function initialize()
{
  $('#calculate').click(final);
}
function stringToNum(string)
{debugger;
  var splitstring = string.split(', ');
  for(var i = 0; i < splitstring.length; i++)
  {
      splitstring[i] = parseInt(splitstring[i]);
  }
  return splitstring;
}

function array_converter(x)
{
     return _.range(1, x+1);
}

function multiplier(numbers,multiple)
{
  for(var i = 0; i < numbers.length; i++)
  {
     numbers[i] *= multiple;
  }
    return numbers;
}

function addArray(numbers)
{
  var sum = 0;
  for(var i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  return sum;
}
function arrayBack(numbers)
{
  var string = numbers.join('+');
  return string
}

function final()
{
  var input = stringToNum($('#input').val());
  var array = array_converter(input[0]);
  var multipliedArray = multiplier(array, input[1]);
  var sum = addArray(multipliedArray);
  var finalArray = arrayBack(multipliedArray);
  $('#answer').text(finalArray + '=' + sum);
}





// function pull()
// {
//   var string = $('#input').val();
//   string = string.split(', ');
//   string = array_converter(string);
//   $('#answer').text(string);
// }