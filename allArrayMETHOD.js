//create a Constructor using array

let arr = new Array("a","b","c");
console.log(arr);
// output['a', 'b', 'c']

// let rushikesh = new rushikesh2("aman","aniket","durgesh","ajinkya");
// console.log(ruhikesh);

let holes = new Array(3);
console.log(holes);
// output[ < 3 empty items > ]
//Array.of()
//creates an array from arguments
let arr1 = Array.of(10,"Rushikesh",true);
console.log(arr1);
// output[10, 'Rushikesh', true]

//Array.from()
//Converts array-like or iterable items
let arr2 = Array.from("Rushikesh");
console.log(arr2);
//it divide the the my name small number
 //output [
// 'R', 'u', 's',
//     'h', 'i', 'k',
//     'e', 's', 'h'
// ]


//Accessing th Elements 
let colors=["red","yellow","blue"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
//output's red,blue
 
//use .at() its show the megative indexing.
console.log(colors.at(-2));
//output yellow

//MODIFYING ARRAYS
//its modify the arrays elements
colors[0] = "pink";
colors[2] = "purple"
console.log(colors);
//output [ 'pink', 'yellow', 'purple' ]

let rush = [1,2,3,4];
rush.length = 5;
console.log(rush);
//output [ 1, 2, 3, 4, <1 empty item> ]
rush.length = 2;
console.log(rush);
//output [ 1, 2 ]

//*MUTATING METHODS*//
// push()
// pop()
// shift ()
// unshifht ()
// // splice ()
// example
let items = ["A","B","C","D"];
items.push("E");
console.log(items);
//output [ 'A', 'B', 'C', 'D', 'E' ]
items.pop("D");
//output ['A', 'x', 'C', 'D']
items.splice(1,1,"x");
console.log(items);
//output [ 'A', 'x', 'C', 'D', 'E' ]
//here's the all examples of push() and pop() method doing the add and delete the last elements of array push and pop lilo method last in last out

//and shift() and unshift() methods are doing the same thing but in first add and first delete like fifo method first in first out

//Concat()methods
//concat methods use for combines the two or more arrays (or values) into new arrays
//examples
let arr3 = [1,2];
let arr4 = [3,4];
let arr5 = [5,6];

let result = arr3.concat(arr4,arr5);
console.log(result);

console.log(arr3);
//output console1[ 1, 2, 3, 4, 5, 6 ],console2 [1, 2]

//Add some Individual values 
let newResult = arr3.concat(7,8,9);
console.log(newResult);
//output [ 1, 2, 7, 8, 9 ]

//* toReversed()
//its use for reverse without mutating

const number = [10,20,30,40,50];
const reversedNumber = number.toReversed();
console.log(reversedNumber);
//output [ 50, 40, 30, 20, 10 ]
console.log(number);
//output [ 10, 20, 30, 40, 50 ]

//*toSorted()*
//sort without Mutating 
//its return a sorted array and leaves the original array unchanged  
//examples
const nums = [3,5,9,7,1,2];
const sortedNums = nums.toSorted((a,b)=> a-b);
console.log(sortedNums);
//output [ 1, 2, 3, 5, 7, 9 ]
console.log(nums);
//output [3, 5, 9, 7, 1, 2]

const words = ["banana", "apple", "cherry"];
const sortedWords = words.toSorted();
console.log(sortedWords); 
//output ["apple", "banana", "cherry"]

//*Forloop*
//forloop use for condition statement like true or false its check the condition, the condition is true is show the output and condition is false is show the output false and return the for loop and check again and again...
//example
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//output a,b,c


//*for of *//
//for of provides a concise of and readable way to iterate over the values of iterable objects.It is especially desgined by for traversing data struture like arrays,string,maps,sets,Nodelists,etc..
//for example
const fruits1 =["apple","cherry","banana"];
for (const fruit of fruits1){
    console.log(fruit);
}
//output apple
//cherry
//banana


//*for in*//
//for in use for keys and values 
//for examples 
let fruits = ["Apple","Mango","watermelon","Graphes"];
for(let index in fruits){
    console.log(index + ":" + fruits[index]);
}
//output
// 0: Apple
// 1: Mango
// 2: watermelon
// 3: Graphes

//*forEach*//
//forEach is use in arrays elements is run the callback function
//examples
let rushi = [10,20,30,40];
rushi.forEach((item,index)=>{
    console.log(index+":" + item);
});
//output
// 0: 10
// 1: 20
// 2: 30
// 3: 40


//*map*//
//map returns a new array 
//it doubled the value 5 to 10 ,2 to 4 like that
let doubled =[1,2,3,4,5,6].map(x => x * 2);
console.log(doubled);
//output
//[ 2, 4, 6, 8, 10, 12 ]


//*filter*//
//it returns elements based on condition
let even = [1,2,3,4,5,].filter(x=>x % 2 === 0);
console.log(even);
//output
//[ 2, 4 ]


//*Reduce*//
//Reduce Accumulates to a single value

let sum = [2,25,5].reduce((acc,cur) => acc + cur, 0);
console.log(sum);
//output 32
//output 32 because is doing addition of number
