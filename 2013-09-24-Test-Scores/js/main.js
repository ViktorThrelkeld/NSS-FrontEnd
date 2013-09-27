//   var testScore = [];
// for(var kid = 0; kid < 10; kid++)
//   {
//   var response = prompt('Enter a test score:');
//   response = parseInt(response);
//   testScore.push(response);
//   }


// debugger;
// var sum = 0;
// for(var count = 0; count < testScore.length; count++)
// {
//  sum += testScore[index];
// }



// var avg = sum /10;
// console.log("This is the average: " + avg);

// for(var loop = testScore.length; loop <= )
var scores = [];
var sum = 0;
var avg = 0;

debugger;

for(var i = 0; i < 10; i++)
{
  var score = prompt("TestScore?");
  score = parseFloat(score);
  scores.push(score);
  sum += score;
}

avg = sum / scores.length;

var sum_of_squares = 0;

for(i = 0; i < 10; i++)
  sum_of_squares += Math.pow(scores[i] - avg, 2);

var standard_deviation = Math.sqrt(sum_of_squares / scores.length);



