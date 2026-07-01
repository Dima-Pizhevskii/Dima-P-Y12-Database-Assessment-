/*******************************************************/
// Programming project
/// Written by Dima Pizhevskii
/*******************************************************/

/*******************************************************/


/*******************************************************/




console.log("running script")
const HTML_OUTPUT = document.getElementById("databaseOutput");


import { GLOBAL_user, loggedIn } from "/fb_io.js";


function writeForm(){
    // Get the form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const favouriteNumber = document.getElementById("favouriteNumber").value;
    if (loggedIn == false){
    console.log(loggedIn)

                let element = document.getElementById("statusMessage");

element.innerText = "Please log in to submit the form.";
        return;

    }else {
    console.log ("Form data: " + name + ", " + favouriteNumber + ", " + favouriteNumber);


    firebase.database().ref('/users/' + GLOBAL_user.uid).set({
        age: age,
        favouriteNumber: favouriteNumber,
        name: name,
    });
        console.log(loggedInString)
        console.log(GLOBAL_user.uid)
        console.log(GLOBAL_user.$uid)
                let element = document.getElementById("statusMessage");

element.innerText = "Form data: " + name + ", " + age + ", " + favouriteNumber;
        console.log("redirecting")
window.location.href = "../select2.html";
    }

}

window.writeForm = writeForm;

