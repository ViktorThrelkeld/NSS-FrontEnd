test('Pig Latin', function(){
  deepEqual(piggy('hello'),'elloha','pig latin for hello');
});

test('reverse', function(){
  var sentence = 'hello, nashville, code';
  var expected = 'odeca; ashvillena; elloha'
  deepEqual(reverse(sentence), expected, 'reverse words of string');
});