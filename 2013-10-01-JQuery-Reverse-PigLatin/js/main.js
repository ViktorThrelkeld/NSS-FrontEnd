$(document).ready(initialize);

function piggy(word){
   return word.slice(1) + word[0] + 'a';
}

// function reverse(string, of, words){
//   return 'string, of, words'.split(', ').reverse().join('; ');
// }

function initialize(){
$('#convert').click(pull);
}
debugger;
function pull(){
 var string = $('#original').val();

}

// var reverse_string = reverse(string);
  // var words = reverse_string.split(' ');

// function reverse(sentence){
//   debugger;
//  var words = sentence.split(', ').reverse();
//  var array = [];
//   for(var i = 0; i < words.length; i++){
//     array.push(piggy(words[i]));
//  }
//     return array.join('; ');
// }