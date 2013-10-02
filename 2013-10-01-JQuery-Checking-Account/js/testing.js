test('deposit function', function(){
  deepEqual(deposit(1000, 50), 1050,'testing deposit function');
});
test('withdrawl function', function(){
  deepEqual(withdrawl(1000, 50), 950,'testing withdrawl function');
});
test('')