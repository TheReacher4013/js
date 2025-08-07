//Oops concept

//*Prototype* imagine every javascript object has secret Backpack. this Backpack is prototype

let obj = {
    name: "rushikesh",
    age: 24,
    city: "amalner"
};
let obj2 = Object.create(obj);

console.log(obj2.age.toString());
//output 24 in string format
//what can i do , toString method is define our code but prototype can go secret backpack and check toString and use and show output.

//and its not show toString method last still end its how null.

//example2 Tranie Joe
const  headChefCookbook = {
    makeFancyOmlette : function(){
        console.log(" makin a super fancy omlette ");
    },
    greetCustomer: function () {
        console.log("Welcome to our restaurant");
    },

};

// const traineeJoe = {
//     name:"joe",
//     makeSandich : function(){
//         console.log(
//             this.name + " is making a delicious sandich"
//         );
//     },
// };

const traineeJoe = Object.create(headChefCookbook);
traineeJoe.name="Joe";
traineeJoe.makeSandwich = function(){
    console.log
    (`${this.name} is making a delicious sandwich`);
};

// console.log(traineeJoe);
traineeJoe.greetCustomer();
//ehat is do in example i can do share a details of headchefcookbook to traineeJoe to greet recipe then i can call the function not calling headchef im call trainee joe so i call traine  but trinee doing greeting making sandwich and all because help of Prototype.

//example 3

function chef (name){
    this.name = name;
    this.makeSandwich = function(){
        console.log(`${this.name} is making a sandwich`);
    };
}

chef.prototype.makeOmlette = function (){
    console.log(`${this.name}is making a omlette`);
}

let mike =  new chef("Mike");
let rushikesh = new chef("rushikesh")
mike.name = "michal Jackson"
console.log(mike);
console.log(rushikesh);


//explain = its show only mike object not chef.prototype because it ois prototype it does not access directly but you can access this you can do this console.log(Mike.makeOmlette) this way is old way to call inheritance.

//marathi = aata mi kay kel ahe ki mi new object banavala rushikesh navacha tyacha sathi mi kahi navin function banvat baslo nahi karan mi already ek functon navacha prototype banvala ("Blue Print") ahe to shodhel ani output deil nahi milal tar null value print karel ok he ast "Prototype cha kam".
//tumhi tyachat name pan change karu shaktat like varti dil ahe like "mike.name = "michal Jackson".

//but its a old way to declare and changes new way is class and object im create a new file for this.