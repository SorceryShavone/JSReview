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
//element.setAtrribute(attribute, value)

let link = document.getElementById ("link");
link.setAttribute("href", "https://www.google.com");