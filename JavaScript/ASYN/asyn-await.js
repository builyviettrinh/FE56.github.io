function cong(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a + b);
        }, 2000);
    })
}

function nhan(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a * b);
        }, 2000)
    })
}

function chia(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(a / b);
        }, 2000)
    })
}

async function dienTichHT(a, b, h) {
    var ab = await cong(a, b);
    var abh = await nhan(ab, h);
    var abh2 = await chia(abh, 2);
    console.log("diên tích hình thang là: " + abh2);
}

dienTichHT(3, 2, 2);