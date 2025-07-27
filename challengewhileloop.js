let randomNumber = Math.random(10);
let userGuess;
while (userGuess != randomNumber){
    if(userGuess > randomNumber){
        console.log("high guess");
    }else if(userGuess < randomNumber){
        console.log("low guess");
    }else{
        console.log("right guess");
    }

}