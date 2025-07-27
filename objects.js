//what is object ?
// => object store key-value pair. keys are string or symbol, and values can be anything(string,numbers,arrays,functions,etc).

//*Creating Objects*//

//1.Object Literal
let person = {
    name: "Rushikesh",
    age: 24,
    greet(){
        console.log("Namsate");
    }
};
// console.log(person);
person.greet();
//output Namsate
//ouptut prints only Namsate i like output likr this "Namsate Rshikesh" so next step 

let person1={
    name: "Joshi",
    age: "24",
    greet:function(){
        console.log(`hello, my name ${this.name}`);
    }
};
person1.greet();
//output 
// hello, my name Joshi
//here im using function and this for calling object 
//function =  using function inside an object make that function a method. This allows the object to perform actions based on its own data 

//this = this refer to the current object that is calling the method

//2 New Object()
let obj = new Object();
obj.name = "Rushikesh";
obj.age = "35";
console.log(obj);
//output 
// { name: 'Rushikesh', age: '35' }
//expalnation = craetes a new empty objects and Adds a property "name" and "age" with the value "Rushikesh" and "35",and this is one way to create an object in javascript using a constructor.

//*Construcor*//
//Explanation = A Constructor in javascripts is a special function used to create and initialize objects.It acts like a blueprint for creating multiple similar objects.
//examples 

let p1 = new Product("laptop",10000);
let p2 = new Product("Tablet",54520);
//why us efunction here see in next chapter
function Product(name,price){
    this.name = name;
    this.price = price;
}
let p = new Product("phone",500);
console.log(p1);
console.log(p2);
//output Product { name: 'laptop', price: 10000 }
//Product { name: 'Tablet', price: 54520 }

//*Object.create(Prototype)*//
//object.create()use for create a new object and explicity set its prototype
let base = { hasEngine: true};
let car  = Object.create(base);
car.wheels = 4;

console.log(car);
//output { wheels: 4 }
console.log(base);
//output { hasEngine: true }

//*Accessing & Modifying*\\
//Accessing means reading values stored in an object or array 
//Modifying means changing or updating the values, or even adding new onces 
 let student = {
    name:"Bob",
    "student ID": "S123"
 };
 console.log(student.name);//accessing values
 console.log(student["student ID"]);//accessing values
 student.name = "Aman";//modifying
 student.grade = 10;

 console.log(student);
//output { name: 'Aman', 'student ID': 'S123', grade: 10 }

//*this keyword*\\
//this keywords refers to the objects that is calling the function 
//When you use this inside a constructor like.

function Product1(name, price) {
    this.name = name;
    this.price = price;

    this.showDetails = function () {
        console.log(`Name: ${this.name}, Price: ₹${this.price}`);
    };
}

let p3 = new Product1("Laptop", 1000);
p3.showDetails(); //'this' refers to object `p3`

//*object.keys*\\
//it returns property name 
let a = {x:1}
let b = {y:2}
let merged = Object.keys(a);
console.log(merged);
//output [ 'x' ]
//merged is just a variable name .you could have called it anything like keys,result,data.

//*object values*\\
//returns a property values 

let v = { x: 1 }
let w = { y: 2 }
let values = Object.values(w);
console.log(values);
//output [ 2 ]
//it returns a value

//*object.entries\\
//its returns [keys,value]pairs
let R = {'rushikesh':25};
let A = {'aman':27};
let entries = Object.entries(R);
console.log(entries);
//output [ [ 'rushikesh', 25 ] ]
//returns a keys values

//*objects.assign*\\
//itd copy/merge objects(shallow)

let k = {r:25};
let J = {f:30};
let merge = Object.assign({},k,J);
console.log(merge);
//output { r: 25, f: 30 }
//it merge the variable

//*Freezing and sealing*\\
// 🔒 1. Object.freeze(obj)
// Prevents:

// Adding new properties 
// Removing properties 
// Changing existing values 
// Changing property descriptors 
// Makes the object completely immutable.
let user = { name: "Rushikesh" };
Object.freeze(user);

user.age = 25;         // ❌ won't be added
user.name = "Aman";    // ❌ won't change
delete user.name;      // ❌ won't delete

console.log(user);     // { name: "Rushikesh" }
console.log(Object.isFrozen(user)); // true
//output { name: 'Rushikesh' }
//true


// 🛡️ 2. Object.seal(obj)

// Prevents:
// Adding new properties ❌
// Removing properties ❌
// Allows:
// Updating existing values ✅

let car2 = { brand: "Honda" };
Object.seal(car2);

car2.brand = "Toyota";  // ✅ allowed
car2.model = "Civic";   // ❌ won't be added
delete car2.brand;      // ❌ won't delete

console.log(car2);                 // { brand: "Toyota" }
console.log(Object.isSealed(car2)); // true

//output { brand: 'Toyota' }
//true


//object.freeze is completely freeze object you should cannot be the object and object values

//object.sealed is same as freezing but you are updating existing values in sealed 
