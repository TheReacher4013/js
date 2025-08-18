//it is a normal declaration of async function

// //async function abc () {
// //}

// const xyz = async () => {
//     // function body
// }


// Async functions allow you to write promise-based code as if it were synchronous, but without blocking the execution thread.

//Await function pause the execution until the promise is resolved.

//Async and Await program.
function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water boiled");
            resolve("Water boiled");
        }, 1000);
    });
}
function sugar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("sugar boiled");
            resolve("sugar boiled");
        }, 2000);
    });
}
function TeaPowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tea powder added");
            resolve("Tea powder added");
        }, 3000);
    });
}
function Milk() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Milk added");
            resolve("Milk added");
        }, 4000);
    });
}
 async function makeTea() {
   await boilWater();
   await sugar();
   await TeaPowder();
   await Milk();
 }

 makeTea();
 

 //await method kay karte ki jithe tumhi await use kel ki ti wait karte tumhi jitke second dile ahe tya sathi jo paryant te second/ kivha kahihi tumhi dile aso te purn hot nahi to paryant output show nahi karnar jevha time jala tevha output show hote.