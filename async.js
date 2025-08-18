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

//jar tumhala data web page var hava asel tar tumhi pudhe he karu shakta.

// function renderPhoto(data){
//     const section = document.getElementById("photos_section");
//     section.innerHTML = ""
//     data.forEach(photo => {
//       const h2 = document.createElement("h2");
//       h2.innerText = photo.title;
//       section.appendChild(h2);
//     });
// }