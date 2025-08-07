const btn = document.getElementById("btn");
 btn.addEventListener("click", clickHandler);
 btn.addEventListener("mouseenter",clickHandler);

 const para = document.getElementsByTagName("p");

 para[0].addEventListener("mouseenter",clickHandler);
 function clickHandler(){
    alert("hello Dom JS");
    para[0].innerText = "hello Domjs"
 }