// //methods
// let fruits = ["banana","apple","mango","orange"];
// console.log(fruits);

// fruits.push("cherry");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("watermelon");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.splice(0,3,"mirchi");
// console.log(fruits);

// fruits.slice(2,4);
// console.log(fruits);

// let arrayone = [1,2,3];
// let arraytwo = [4,5,6];
// console.log(...arrayone);
// //(...arrayone); only show the value 1,2,3, not show like array so you can use [] square brackects so its show you like a array [1,2,3] like this= 
// console.log([...arrayone]);
 
let vegitable = ["lemon","tomato","potato","ladfinger","cucumber","raddish","carrot"];

// console.log(vegitable);


// // It is old way to show the elements through using for loop
// for(let i=0;i<vegitable.length;i++){
//     console.log(vegitable[i]);
// }

//it is new way to show the element through using for of statement 
//for of
for(let vegis of vegitable){
    console.log(vegis);
    
}

