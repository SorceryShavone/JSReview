// import ()


//EVENT LISTENER 
/*document.addEventListener('keypress', function(e) {
    let keypressed = e.key
    alert ("The key pressed was " + keypressed)

})

*/

//FORM EVENTS
    //examples: onblue, onchange, onfocus, onreset, onselect, onsubmit
        //with onselect, this is a way webites prevent copy and pasting

//FRAME EVENTS
    // examples: onabort, onerror, onload, onresize, onscroll, onunload
 
/*
window.onload=function(){
    //all JavaScript initialization here.
}

i.e. when i "onscroll" to this part of the window trigger this event

*/

window


class Person {
    constructor (fname, lname, age, isFemale, hasGlasses, hobbies, height) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
        this.isFemale = isFemale;
        this.hasGlasses = hasGlasses;
        this.hobbies = hobbies;
        this.height = height;
    }

    speak () {
        console.log("Hello!");
    }
    move(steps) {
        console.log("You have moved" + steps + "steps.")
    }
    jump(feet) {
        console.log("You have jumped" + feet + "feet.")
    }
    sleep(hours) {
        console.log("You have slept for" + hours + "hours.")
    }
}

const myPerson = newPerson ("John", "Lennon", 40, false, true, ["Singing", "Guitar", "Writing"], 6);

console.log(myPerson)

let todayDate = new Date ();

//let customDate = new Date(2017, 1, 23, 8, 57, 36, 5)