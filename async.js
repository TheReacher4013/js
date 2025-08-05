async function photos(){
    const url = "https://jsonplaceholder.typicode.com/photos";
    
    try{
        const response = await fetch(url);
        console.log(response);
        if(!response.ok){
            throw new error("Data is failed to fetch");
        }
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.log(e);
    }
}
console.log("hello Rushikesh");
photos();