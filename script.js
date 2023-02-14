
function userName() {

    let thisName;
    while (thisName != "5") {
        thisName = prompt("What is 2 +  3?");
        if (thisName == "5") {
            alert("You are right")
        }
        else {
            alert("Try Again")
        }
    }
}

let userAns = "";

function rating(){
    let userAns = prompt ("How would you rate my webpage 1-5?"); 
    for(let x = 0; x < userAns; x++){
        document.getElementById("thisPar").innerHTML += "<img src = https://i.etsystatic.com/16458179/r/il/407f8e/4334905895/il_1588xN.4334905895_43ze.jpg width=100px height=100px>"
}
}

function whodat () {
    myname = prompt("What is your name?");
    if (myname != "Anila"){
        alert ('ERROR HACKER ERROR');   
    } else {
    alert ("Hello, " + myname);
    }
}

whodat();