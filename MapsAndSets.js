//its Not Map method that is completely different its only map

//example map

const roles = new Map();

const user1 = {name:"rushikesh"};
const user2 = {name:'aman'};

roles.set(user1, "Admin");
roles.set(user2, "user");
console.log(roles.get(user1));
console.log("user",user2);
console.log("user", user1);

roles.set("Ajinkya","user");
console.log(roles.get(user1));


//set is used for sets values.
//get is used for fetch values.

//map is set in order way 
//But why use map "you need quick find,add re remove items by unique key and you care about the order of items.

//example sets

const color = new Set();

color.add("red");
color.add("red");
color.add("yellow");
color.add("orange");

console.log(color);

//output = Set(3) { 'red', 'yellow', 'orange' }
//sets does not allowed duplicate value its always store unique value, and its not follow order its always show different type of order in output.
