// var xs = []
// var ys = []
// var hor_sum = 0;
// var vert_sum = 0;

// debugger;

// for(var count = 0; count < 2; count++)
// {
// var x = prompt('What is your horizontal position?');
//   x = parseFloat(x);
//   xs.push(x);
// var y = prompt('What is your vertical position?');
//   y = parseFloat(y);
//   ys.push(y);


// }
// var xsum = xs[0] - xs[1];
// var ysum = ys[0] - ys[1];

// var diff = Math.sqrt(Math.pow(xsum, 2)) + (Math.pow(ysum, 2));
// console.log(diff)


// ****************chyld's
var points = []

for(var i =0; i < 2; i++)
{
  var point = {};
  point.x = parseInt(prompt('X Coordinate?'));
  point.y = parseInt(prompt('y Coordinate?'));
  points.push(point);
}

var dy = points[0].y - points[1].y;
var dx = points[0].x - points[1].x;

var distance = Math.sqrt(dy*dy) + (dx*dx);














