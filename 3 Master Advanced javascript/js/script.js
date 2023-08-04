/*
function adbcd(val) {

}

var value = adbcd(function() {});

//iife

console.log("harsha");

(function() {
    var privateVal = 12;
})()


var ans = (function() {
    var privateVal = 12;
    var jj = "harsha";

    return {
        getter: function() {
            console.log(privateVal);
        }
    }
})()



var ans = (function() {
    var privateVal = 12;

    return {
        getter: function() {
            console.log(privateVal);
        },
        setter: function(val) {
            privateVal = val;
        }
    }
})()


//prototype


var obj = {
    name: "arsja"
}


//prototype=le inheritance

var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    hasFourLegs: false
}


var sheryiansStudents = {
    canMakeAmazingWebsites: true,
    canMakeAwesomeAnimations: true,
    canMakeWorldClassAwwardedWebsites: true
}

sheryiansStudents.__proto__ = human;

// human.__proto__ = sheryiansStudents;

var a = {

};

 



var button = document.querySelector("button");

button.addEventListener("click", function() {
    button.style.color = "green";
    button.style.backgroundColor = "darkred";
});

//call

fnction abcd(val1, val2, val3) {
    console.log(this, val1, val2, val3);
}

var obj = { age: 24 };

abcd.call(obj.age, 1, 2, 3);


function abcd() {
    console.log(this);
}


var obj = { age: 24 }

var bindedfnc = abcd.bind(obj);

bindedfnc();


function abcd(val) {
    Math.random() * val;
}


var ans1 = abcd(2)
var ans2 = abcd(2);


*/