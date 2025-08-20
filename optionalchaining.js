let obj = {
    name: "John",
};
// ?. its optional chaining symbol
console.log(obj.address?.[0]); 
// Optional chaining k istemal se hum bina error ke property tak pahuncha sakte hain matlab ki backend se data nahi aaya to bhi code chalega kuch na kuch output to dega. mahnje program crash nahi hoga.

//Nullish coalescing

console.log(obj.address?.[0] ?? "Address not available");

let num =0;

let num2 = num || 10;
console.log(num2);