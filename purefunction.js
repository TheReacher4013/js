//its a pure function
function add(a, b) {
    return a + b;
}

//impure function
let count = 0;
function increment() {
    count++;
    return count;
}

//map function, filter, reduce and forEach.

let arr = [1, 2, 3, 4, 5];

//map = map is used for duplicates/return  the array.
let doubled = arr.map((x)=> x);
console.log(doubled);

//filter = filter returns new array
let evens = arr.filter((item)=> item % 2 === 0);
console.log(evens);

//reduce = reduce is used for sum of the single value in array. it means its convert an array into a single value.
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum);

//forEach = forEach is used for iteration.
arr.forEach((x) => console.log(x));

//output of all
// [ 1, 2, 3, 4, 5 ]
// [2, 4]
// 15
// 1
// 2
// 3
// 4
// 5