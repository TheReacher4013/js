function ObjConstruct(name,engine){
    this.name = name;
    this.engine = engine;

    console.log(this, name,engine);
}
ObjConstruct();
//explicit binding methods = > call,apply,bind.
const car ={type: "car"};
const engine ={ type: "V8"};
//call
ObjConstruct.call(car);
ObjConstruct.call(engine);
//output 
// type: 'car', name: undefined, engine: undefined } undefined undefined
//{ type: 'V8', name: undefined, engine: undefined }
//apply
ObjConstruct.apply(car,["civic","v8"]);
//output  type: 'car', name: 'civic', engine: 'v8' } civic v8

//call and apply is the same because they calling function using "this keyword" 

//bind

const user = {
    name: "rushikeshjoshi",
    greeting: function(){
        console.log(this.name);
    },
};
const user2 ={
    name: "AMAN",
};
const bindGreet = user.greeting.bind(user2);
bindGreet();
//output AMAN this output call user 2.
//output rushikesh this output call user only .

//call= calls function immediately and sets "this" inside the function to this

//apply= Also call function immediately, but you pass arguments as an array.

//bind= Returns a new function with this bound to user , and optionally pre-filled arguements.Its does not call the function immediately.

//example 2 in  bind

function sayHello(name){
    console.log(`Hello,${name}! My name is ${this.myname}`);
}
const person = {
    myname: "Rushikesh Kishor Joshi"
};
const boundFunction = sayHello.bind(person);
boundFunction('AMAN')
//ouput Hello,AMAN! My name is Rushikesh Kishor Joshi

//example3
const Hello = {
    name: "hello",
    greeting: function(){
        console.log(this.name)

    },
};
const user3 ={
    name: "joshi"
};
const bindinggreet = Hello.greeting.bind(Hello);
bindinggreet();
