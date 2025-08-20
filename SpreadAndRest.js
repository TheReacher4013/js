let arr = [1, 2, 3, 4, 5];
let arr2 = [5,6,7,8];

let [num1, num2] = arr;
console.log(num1);
console.log(num2);

//spread operator
let combinedarray = [...arr, ...arr2];

console.log(combinedarray);
//it is shortcut method of combining arrays.

//Rest operator

// parameter ke undar 3 dots (...) laga do to woh karata kya he ki woh usko array kwe undar converts kar deta hai.

function abc (...nums) {
    return nums;
}

console.log(abc(6,7,8,9,0,4,5));