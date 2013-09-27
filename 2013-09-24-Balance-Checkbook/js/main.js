var name = prompt('What is your Full Name?');
var initBalance = prompt('What is your initial balance?');
var deposit1 = prompt('Enter your first Deposit');
var deposit2 = prompt('Enter in your second Deposit');
var deposit3 = prompt('Enter in your third Deposit');
var withdrawl1 = prompt('Enter your first withdrawl');
var withdrawl2 = prompt('Enter your second withdrawl');
var withdrawl3 = prompt('Enter your third withdrawl');

debugger;

initBalance = parseInt(initBalance);
deposit1 = parseInt(deposit1);
deposit2 = parseInt(deposit2);
deposit3 = parseInt(deposit3);
withdrawl1= parseInt(withdrawl1);
withdrawl2= parseInt(withdrawl2);
withdrawl3= parseInt(withdrawl3);

var sum = deposit1 + deposit2 + deposit3 - withdrawl1 - withdrawl2 - withdrawl3;
var endBalance = initBalance + sum;

if (endBalance< 0)
  console.log(name + ", Your balance is : " + (endBalance - 50) + " You got an Overdraft fee of $50");
else
  console.log(name + ", Your balance is : " + endBalance);

