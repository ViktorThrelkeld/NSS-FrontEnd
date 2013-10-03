test('string to numbers', function(){
  deepEqual(stringToNum('5, 3'), [5,3],'string to numbers')
});
test('converter function', function(){
  deepEqual(array_converter(5),[1, 2, 3, 4, 5],'testing for an array from 5')
});

test('mutiply by y', function(){
  deepEqual(multiplier([1,2,3,4,5], 3), [3,6,9,12,15],'testing for a mutiplier of 3')
});

test('sum the array', function(){
  deepEqual(addArray([3,6,9,12,15]), 45, 'testing the addition of the array')
});

test('array back to string', function(){
  deepEqual(arrayBack([3,6,9,12,15]), ('3+6+9+12+15'),'test array back to string')
});



// test('converter function', function(){
//   deepEqual(array_converter('5, 3'),'3, 6, 9, 12, 15','testing for 5');
// });

// test('multiplier function', function(){
//   deepEqual(multipier(5, 3), ,'testing for 3');
// });