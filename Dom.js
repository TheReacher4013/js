const btn = document.getElementById("btn");
 btn.addEventListener("click", clickHandler);
 btn.addEventListener("mouseenter",clickHandler);

 const para = document.getElementsByTagName("p");

 para[0].addEventListener("mouseenter",clickHandler);
 function clickHandler(){
    alert("hello Dom JS");
    para[0].innerText = "hello Domjs"
 }

//document.getElementsByTagName("p");
//its a collection of all <p> elements in the document

//document.getElementsByClassName("className");
//its a collection of all elements with the specified class name

//document.getElementsByName("name");
//its a collection of all elements with the specified name

//document.createElement("tagName/h2");
//its create <h2> element

//document.querySelectorAll("li");
//its a collection of all elements that match the specified CSS selector