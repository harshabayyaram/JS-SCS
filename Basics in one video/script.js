const dulha = "lab";
const dulhan = "laby";


//hoisting

a = 10;

var a;

var a;

console.log("check : " + a);

a = 12;

console.log("check2 : " + a);

console.log(b);
var b;



//types in js


var a = [1, 2, 3];

var b = a;
b.pop();

console.log(b);

console.log(a);

var a = [1, 2, 3];

var b = a;

b.pop();
console.log(a);


//conditionals


if (12 > 10) {
    console.log("good")
} else if (12 < 10) {
    console.log("less");
}




if (1) {
    console.log("what")
}

var f = 10;

if (f) {
    console.log("works");
}


//loop


for (var i = 0; i < 11; i++) {
    console.log(i);
}

for (var i = 25; i < 51; i++) {
    console.log(i);
}

var a = 12;

while (a < 20) {
    console.log(a);
    a++;
}


console.log();



function abcd(a) {
    console.log(a);
}

abcd(1313131);

var arr = [11, 12, 13, 14, 156];

console.log(arr[4]);


var arr = [11, 12, 13, 14, 156];


arr.push(10);

console.log(arr);

arr.push(0);

console.log(arr);


arr.unshift(1919);
console.log(arr);