//Static function is used in classes and object 

class Animal {
    static bark ="lion dahad"; 
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(this.name);
    }
}

let animal1= new Animal("lion");
console.log(animal1);  
//output only show name lion
//but you can do  animal1.bark its show im ouput is undefined  because its for calss not for instant ,but how to access this just show you =>.

console.log(Animal.bark) ;
//output lion dahad its show because its specific related property and use of static so  im calling class and its show static clas property.

