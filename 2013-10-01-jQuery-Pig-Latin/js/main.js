$(document).ready(initialize);

function piggy(word){
   return word.slice(1) + word[0] + 'a'

}

function initialize(){
  $('#pig').click(porkpull);
}

function porkpull(){
  var pull = $('#original').val();
  var new_word = piggy(pull);
  $('#piglatin').text(new_word);
}


