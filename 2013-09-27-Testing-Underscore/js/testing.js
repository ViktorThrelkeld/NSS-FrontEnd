test( "Filter Even Numbers", function() {
  var numbers = _.range(10);
  var expected = [0, 2, 4, 6, 8];
  deepEqual(filter_evens(numbers), expected, "testing the filter_evens function" );
});

test( "Filter Odd Numbers", function() {
  var numbers = _.range(10);
  var expected = [1, 3, 5, 7, 9];
  deepEqual(filter_odds(numbers), expected, "testing the filter_odds function" );
});

test( "Filter Short Strings", function() {
  var strings = ["hello", "there", "a", "the", "cat", "elephant", "encyclopedia"];
  var expected = ['a', 'the', 'cat'];
  deepEqual(filter_short_strings(strings), expected, "testing short strings under 4 characters" );
});

test( "Filter 'A' Strings", function() {
  var strings = ["apple", "hello", "there", "a", "the", "cat", "Aardvark", "elephant", "encyclopedia"];
  var expected = ['apple', 'a', 'Aardvark'];
  deepEqual(filter_a_strings(strings), expected, "strings should begin with letter a" );
});

test( "Find a String", function() {
  var strings = ["apple", "hello", "there", "a", "the", "cat", "Aardvark", "elephant", "encyclopedia"];
  deepEqual(find_string(strings, "elephant"), "elephant", "should find the elephant");
  deepEqual(find_string(strings, "Aardvark"), "Aardvark", "should find the Aardvark");
  deepEqual(find_string(strings, "cat"), "cat", "should find the cat");
  deepEqual(find_string(strings, "not here"), undefined, "should not find the string");
});

test( "Find a String Ending in a particular Letter", function() {
  var strings = ["dog", "cats", "lion", "tigers"];
  deepEqual(find_string_ending_letter(strings, "s"), "cats", "should find the word ending in s");
  deepEqual(find_string_ending_letter(strings, "z"), undefined, "should not find the word ending in z");
});

test( "Adding", function() {
  deepEqual(1+1, 2, "adding 1+1" );
});

test( "Test First Letter", function() {
  deepEqual("Parthenon" [0], "P", "Getting first letter from string" );
});

test( "Add 5", function() {
  deepEqual(add_5(3), 8, "adds five to three");
  deepEqual(add_5(0),5,"adds five to zero");
  deepEqual(add_5(5),10,"adds five to five");
});

test( "square", function() {
  deepEqual(square(5), 25, "Getting a square");
});

test( "Area", function(){
  deepEqual(area(5,3), 15, "Getting area of 5 and 3");
});

test( "Volume", function(){
  deepEqual(volume(5,2,2), 20, "Getting volume");
});

test( "power", function(){
  deepEqual(power(2,4), 16, "Getting power");
  deepEqual(power(3,2), 9, "Getting power");
  deepEqual(power(4,3), 64, "Getting power");
  deepEqual(power(4,0), 1, "Getting power to 0");
});

// test( "Greetings", function(){
//   deepEqual(greetings("Jenny"), "Greetings, Jenny!", "Greetings to jenny");
// });

test( "Pig Latin", function(){
  deepEqual(pig_latin("Brian"), "rianBa", "Pig Latin for Brian");
});

test( "Greetings", function(){
  deepEqual(greetings("Greetings, ", "Jenny"), "Greetings, Jenny!", "Greetings to jenny");
});



test( "Greetings", function(){
  deepEqual(pig_latin_greetings("Greetings", "Jenny"), "reetingsGa, ennyJa!", "Greetings to jenny");
});

test( "Pig Latin Sentence", function(){
  var sentence = "Coding at the Parthenon in Nashville"
  var expected = "odingCa taa heta arthenonPa nia ashvilleNa"
  deepEqual(pig_latin_sentence(sentence), expected, "sentence in pig latin");
});
