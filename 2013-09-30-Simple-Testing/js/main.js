function add_three(x){
 return x + 3;
}

function square(x){

  return x * x;
}

function area(x,y){
  return x * y;
}

function volume(x,y,z){

  return area(x,y) * z;
}

function power(base, exp){
var sum = 1;
  for(var i = 0; i < exp; i++){
   sum *= base;
  }
  return sum;
}

function greeting(hello, person){
  return hello +", " + person + "!";
}

function pig_latin(word){

  return word.slice(1) + word[0] + "a"

}

function pig_greeting(greeting, person){
    return pig_latin(greeting) + ", " + pig_latin(person) + "!";
}

function pig_sentence(sentence){
  debugger;
 var words = sentence.split(' ');
 var array = [];

 for(var i = 0; i < words.length; i++){
    array.push(pig_latin(words[i]));
 }
    return array.join(' ');
}