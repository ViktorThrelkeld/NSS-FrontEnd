var menu = {};
menu.sections = {};
menu.total_calories = 0;
menu.number_of_sections = parseInt(prompt('Number of Sections?'));

for(var i = 0; i < menu.number_of_sections; i++)
{
  var section_name = prompt('Name of Section?');
  menu.sections[section_name] = [];
}
var reponse = prompt('Menu Selection or blank to exit');
while(response)
{
  var item = {};
  item.name = prompt('Name?');
  item.calories = parseInt(prompt('Calories'));
  item.cost = parseFloat(prompt('Cost?'));
  item.ingredients = prompt('Ingredients?').split(', ');
  menu.sections[response].push(item);
  response = prompt('Menu Selection or blank to exit');
}

var section_list = Object.getOwnPropertyNames(menu.sections)

for(i = 0;i < section_list.length; i++)
{
  for(var j = 0;j < menu.sections[section_list[i]].length; j++)
    menu.total_calories += menu.sectins[section_list[i]][j].calories;
}





// my code below......................................
// var items = [];

// debugger;
// var item_name = prompt('Enter an item name or blank to exit: ');

// while(item_name)
// {
//   var item ={};
//   item.name = item_name;
//   item.selection = prompt('Enter item type;');
//   item.price = parseFloat(prompt('Enter item price:'));
//   item.calories = parseInt(prompt('Enter item calories:'));
//   item.ingredients = prompt('Enter item ingredients:');
//   items.push(item);
//   item_name = prompt('Enter item name or blank to quit:');
// }

// // var item_total = 0;
// var cost_total = 0;
// var cal_total = 0;

// function avg(x)
// {
//   return x / items.length
// }

// for(var i = 0; i < items.length; i ++)
// {
//   console.log(items[i].selection);
//   console.log(items[i].name);
//   console.log(items[i].price);
//   console.log(items[i].calories);
//   console.log(items[i].ingredients);
//   // item_total += i;
//   cal_total += items[i].calories;
//   cost_total += items[i].price;

// }
// console.log("This menu has " + items.length + " items.")
// console.log("Everything on this menu adds up to a total of $" + cost_total);
// console.log("This menu has total of " + cal_total + " calories.");
// console.log("This menu has an average cost of " + avg(cost_total));
// console.log("This menu has a colorie average of " + avg(cal_total));

