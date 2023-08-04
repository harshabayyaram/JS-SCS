var a = document.querySelector("h1");

a.innerHTML = "hello changed HTML";

a.style.color = "red";


var body = document.querySelector("body");
body.style.backgroundColor = "yellow";


a.addEventListener("click", function() {
    a.style.color = "blue"
    console.log("hey")
})




var bulb = document.querySelector("#bulb");

var on = document.querySelector("#on");


var flag = 0;

on.addEventListener("click", function() {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        console.log("clicked");
        flag = 1;
    } else {
        bulb.style.backgroundColor = "transparent";
        console.log("again clicked");
        flag = 0;
    }
});




document.getElementByClassName("box");