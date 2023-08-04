setTimeout(function() {
    console.log("harsha");
}, 2000);

console.log("hey1");
console.log("hey1");
setTimeout(function() {
    console.log("hey4");
}, 0);

console.log("hey1");

setTimeout(function() {
    console.log("harsha");
}, 2000);


var ans = new Promise((res, rej) => {
    if (false) {
        return res();
    } else {
        return rej();
    }
})

ans
    .then(function() {
        console.log("resolved")
    })

.catch(function() {
    console.log("rejected");
})


var ans = new Promise((res, rej) => {
    var a = 2

    if (a < 5) {
        return res();
    } else {
        return rej();
    }
})

ans
    .then(function() {
        console.log("below");
    })
    .catch(function() {
        console.log("above");
    });


var ans = new Promise(function(res, rej) {
    return res("fadfadfadf");
})

ans.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res("gate");
    })
});

var ans = new Promise(function(res, rej) {
    return res("fadfadfadf");
})

var b = ans.then(function(data) {
    console.log(data);
    return new Promise(function(res, rej) {
        return res("gate");
    })
})

var c = b.then(function(data) {
    console.log("fffff");

    return new Promise(function(res, rej) {
        return res("do it ")
    })
})


c.then(function(data) {
    console.log("c")
})



function abcd() {
    fetch('https://randomuser.me/api/')
        .then(function(raw) {
            return raw.json();
        })
        .then(function(data) {
            console.log(data);
        });
}

abcd();



async function abcd() {
    let raw = await fetch('https://randomuser.me/api/')
    let ans = await raw.json();
    console.log(ans);
}

abcd();