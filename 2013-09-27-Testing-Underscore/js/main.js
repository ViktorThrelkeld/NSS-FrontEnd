function filter_evens(numbers)
{
  return _.filter(numbers, function(num){return (num % 2) == 0;});
}

function filter_odds(numbers)
{
  return _.filter(numbers, function(num){return (num % 2) == 1;});
}

function filter_short_strings(strings)
{
  return _.filter(strings, function(string){return string.length < 4;});
}

function filter_a_strings(strings)
{
  return _.filter(strings, function(string){return string[0].toLowerCase() == 'a';});
}

function find_string(strings, word)
{
  return _.find(strings, function(string){return string == word;});
}

function find_string_ending_letter(strings, letter)
{
  return _.find(strings, function(string){return string[string.length - 1] == letter;});
}

function add_5(x){
  return x+5;
}
function square(x){
  return x*x;
}

function area(x,y){
  return x * y;
}
function volume(x,y,z){
  return x * y * z;
}
function power(base,y){
  var sum = 1
  for(var i = 0; i < y; i++)
{
  sum *= base
  };
  return sum;
};
// function greetings(x){
//   return "Greetings, " + x + "!"
// }

function pig_latin(example){
 return example.slice(1) + example[0] + "a";
};

function greetings(x,y){
  return x + y + "!";
}

function pig_latin_greetings(x,y){
  return pig_latin(x) + ", " + pig_latin(y) + "!";
}

function pig_latin_sentence(sentence)
{
  debugger;
  var words = sentence.split(" ");
  var pig_array = []
  for(i = 0; i < words.length; i++){
    pig_array.push(pig_latin(words[i]));
  };
     return pig_array.join(' ');

};