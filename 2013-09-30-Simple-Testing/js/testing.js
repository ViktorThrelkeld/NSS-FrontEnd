// test( "<name of function>", function() {
// deepEqual(<actual_value>, <expected_value>, "what this test is doing" );
// deepEqual(<actual_value, <expected_value>, "testing this function with different arguments" );
// });

test( "1 + 1", function() {
deepEqual(1 + 1, 2, "adding 1 + 1" );
});

test( "nashville[0]", function() {
deepEqual("nashville"[0], "n", " getting n from nashville" );
});

test( "add_three", function() {
deepEqual(add_three(5), 8, "adding 3 to 5");
deepEqual(add_three(7), 10, "adding 3 to 7");
});

test( "square", function() {
deepEqual(square(3), 9, "square 3");
deepEqual(square(5), 25, "square 5");
});

test( "area", function() {
deepEqual(area(3,5), 15, "area 3 5" );
deepEqual(area(7,5), 35, "area 7 5" );
});

test( "volume", function() {
deepEqual(volume(3,5,2), 30, "area 3 5 2" );
deepEqual(volume(7,5,2), 70, "area 7 5" );
});

test( "power", function() {
deepEqual(power(2,0), 1, "power of 2 to 0" );
deepEqual(power(2,1), 2, "power of 2 to 1" );
deepEqual(power(2,2), 4, "power of 2 to 2" );
deepEqual(power(2,3), 8, "power of 2 to 3" );
});

test( "greeting", function() {
deepEqual(greeting("hello", "janet"), "hello, janet!" , "hello to janet");
});

test( "pig latin", function() {
deepEqual(pig_latin("hello"), "elloha" , "hello in pig latin");
});

test( "pig greeting", function() {
deepEqual(pig_greeting("hello", "janet"), "elloha, anetja!" , "hello to janet in pl");
});

test( "pig sentence", function() {
  var sentence = "four score and seven years ago";
  var expected = "ourfa coresa ndaa evensa earsya goaa";
deepEqual(pig_sentence(sentence), expected , "pig latin sentence 1");
});