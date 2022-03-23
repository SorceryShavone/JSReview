console.log(document.head, "document.head");
console.log(document.body, "document.body");

document.getElementById("text");
//Above will not be enough, JS will do but not store. So need to store in variable

let paragraph1 = document.getElementById("text");
console.log(paragraph1, "paragraph1");

//Another example
/*This example will do the same thing, you would have to ensure use # or . if in CSS
    compared to getElementById where wouldnt need to ensure having the # or. notation*/
let paragraph2 = document.querySelector("#text");

console.log(paragraph2, "paragraph2");

//because gives a collection of items, ID could be easier to work with 
let paragraph3 = document.getElementsByTagName("p"); 
console.log(paragraph3, "paragraph3");

//These three below would be the same can use either to notate getting a string
document.getElementById("");
document.getElementById('');
document.getElementById(``);

 let textquotation = document.getElementById("text");
 let textquotation1 = document.getElementById('text');
 let textquotation2 = document.getElementById(`text`);

 
 console.log(textquotation, "textquotation");
 console.log(textquotation1, "textquotation1");
 console.log(textquotation2, "textquotation2");

//Accessing Nodes
/* getELement(S)ByTagName or other get Elements -- means that it will give you
        mulitple nodes. Whether that was a div or paragraph etc, it will return
        all listed */

//Creating and Appending Elements
/* We are able to create an element by create method 

document.createElement();
document.appendChild();

document.createElement(element); -->  creates an html element
        let myDiv = document.createElement("div")
document.append(element); -->  Add an html element
        document.append(myDiv)

let header = document.createElement("h1");

        paragraph.append("Hello World");
Element Node Properties
-className
-id
-innerHTML
-style
-tagName


*/

//Changing html via javascript

/* let paragraph4 = document.getElementById('text');

let newText = "<strong> Changed text with JavaScript </strong>";

let newText1 = "<strong> Changed text with JavaScript </strong>";

paragraph4.innerHTML = newText; // although can take in html properties, as security issues --> people can hack your page add things to the page

paragraph4.innerText = newText1; //would only take in text so would need to add tags to new text i.e. "<p> text </p>"

paragraph4.className = "newclass";

*/

// Setting Attributes
 /*

 element.attribute = new value
 myDiv.id = "newID"

 same as 

element.setAtrribute(attribute, value);
myDiv.setAttribute("id", "NewId")


EXAMPLE

let link = document.getElementById ("link");
link.setAttribute("href", "https://www.google.com");

*/



//Modifying an Element's Style
/*
varcommentTag = document.getElementById("specificTag");

commentTag.style.backgroundColor = "#FFFF00";
commentTag.style.borderwith = "3px";
commentTag.style.fontsize = "24px"; 


let paragraph4 = document.getElementById('text');

let newText1 = "<strong> Changed text with JavaScript </strong>";

paragraph4.innerText = "<strong> newText1 </strong>" ; //would only take in text so would need to add tags to new text i.e. "<p> text </p>"
paragraph4.style.color = "red";
paragraph4.style.backgroundColor = "blue";
document.body.style.backgroundColor = "maroon";

*/

//Modifying Styling - Prefered Method --> using classes
/*
label.classList.addClass("someClassName");
label.classList.removeClass("someClassName");
label.classList.toggle("someClassName");

//toggle --> means if it exists add it, if it doesn't replace it
*/



let paragraph = document.getElementById('text');

//let newText = "<strong> Changed text with JavaScript </strong>";

//paragraph4.innerText = "<strong> newText1 </strong>" ; //would only take in text so would need to add tags to new text i.e. "<p> text </p>"
paragraph.innerHTML = "Hello World";


//paragraph.classList.add("jschange");

//Removing Elements

//element.remove () - removes completely from the document

//paragraph.remove()


//JAVASCRIPT EVENTS

/* Event is an action that can be detected by JS. 
event is triggered, then it can be caught by JS functions 

    there is inline event handlers & event listeners (happens within javascript as opposed dto inline html)

    events are usually on"something"
*/

    function clickFunction() {
        paragraph.innerHTML = "Welcome to this page"
    }

    paragraph.addEventListener("click", clickFunction);



/*
   function clickFunction() {
        paragraph.classList.toggle = "Welcome to this page"
  }


    /* greetingBox.addEventListener('click', alert('Good Morning'));
        state variable, use an event listener, say waht type of event it is, and then state what it will do
*/

function clickFunctionOut() {
    paragraph.innerHTML = "Hey"
}


paragraph.addEventListener("mouseleave", clickFunctionOut);

/*
//also can do it via button
let button = document.getElementById("btn");
button.addEventListener("click", clickFunction); */