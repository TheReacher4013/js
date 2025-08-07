// class abc{}//named class and its hosting

// const abc = class {};//anoymous class and its not hosting.Because its under the variable.

const add = function addition(){
    console.log("hello");
};
console.log(add());
 //it is a normal class declaration

 //class using contructor  
 class Animal {
    constructor(name){
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
 }
 //object instant of class and also called polymorphism because blueprint already is ready so im create again and again new object not class its called polymorphism.
 const Tiger = new Animal("Panther")
 const Tiger1 = new Animal("lion")
//  console.log(Tiger);
Tiger.greet(); 
Tiger1.greet();

// inheritance

class lion extends Animal{
    constructor(name){
        super(name)//do not forget use super its very important for inheritance.
    }
    greet = () =>{
        super.greet();
        console.log("greet function edited in child class"); 
    }
} 
 const lion1 = new  lion ("affrican lion");
 console.log(lion1.greet());
 
 //full code