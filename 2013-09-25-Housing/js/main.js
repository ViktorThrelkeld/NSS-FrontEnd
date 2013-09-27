function area(l,w)
{
  return l * w;
}

const PRICE_PER_SQFT = 200;
const PRICE_PER_WINDOW = 250;

var house {};
house.number_of_rooms = parseInt(prompt('Number of Rooms?'));
house.number_of_windows = 0;
house.area = 0;
house.rooms = [];

for(var i = 0; i< house.number_of_rooms; i++)
{
 var room = {};
 room.name = promp('Name?');
 room.windows = prompt('Number of Windows?');
 room.length = parseInt(prompt('Length?'));
 room.width = parseInt(prompt('Width?'));
 room.area = area(room.lenth, room.width);

 house.rooms.push(room);
}

debugger;

house.area_cost = house.area * PRICE_PER_SQFT;
house.window_cost = house.num_of_windows * PRICE_PER_WINDOW;
house.total_cost = house.area_cost + house.window_cost;


// ************************ chyld's code above
// // var rooms = [];
// // var room_name = prompt('Enter the name of a room or blank to exit: ');

// // debugger;
// // while(room_name)
// // {
// //   var room = {};
// //   room.room_name = room_name;
// //   room.w = parseFloat(prompt('What is the length?'));
// //   room.l = parseFloat(prompt('What is the width?'));
// //   room.area = sqft(room.w, room.l);
// //   room.window = parseInt(prompt('How many windows?'));
// //   rooms.push(room);
// //   room_name = prompt('Enter the name of a room or blank to exit:');
// // }


// // var house_area = 0;
// // var num_of_windows = 0;

// // for(var i = 0; i < rooms.length; i++)
// // {
// //   house_area += rooms[i].area;
// //   num_of_windows += rooms[i].window;
// // }

// // var total_window_price = 250 * num_of_windows;
// // var total_house_price = 200 * house_area;
// // var grand_total = total_house_price + total_window_price;


// // function sqft(width, length)
// // {
// //   return width * length;
// // }

// // console.log("You have " + rooms.length + " rooms.");
// // console.log("Your house is " + house_area + " square feet.");
// // console.log('The square footage costs ' + total_house_price);
// // console.log('There are ' + num_of_windows + ' windows');
// // console.log('The windows cost you is ' + total_window_price);
// // console.log('The entire cost is ' + grand_total);




