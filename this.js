function greet2(){
    console.log(this);
}
const obj = {
    name: "rushikesh",
    age: 22,
    qualification: "M.sc computer science",
    //regular object calling with this keyword


    greet: function (){
        console.log(this);
        //regular function with his own binding

    const innerfunction =()=>{
        console.log(this);
        //arrow function with no binding
    };
    innerfunction();
    },
};
obj.greet();

//arrow function its not use this keyword//

//example2 
function ObjConstruct(name,age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(
            " hello, my name is " +
            this.name+
            " and I am " +
            this.age+
            " year old. "
        );
    };
}
let user1 = new ObjConstruct("Rushikesh",25);
let user2 = new ObjConstruct("Aman",27);

user1.greet();
user2.greet();