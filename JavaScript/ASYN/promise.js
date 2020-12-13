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

function dienTichHT(a, b, h) {
    return cong(a, b)
        .then(function(resultCong) {
            return nhan(resultCong, h);
        })
        .then(function(resultNhan) {
            return chia(resultNhan, 2);
        });
}

dienTichHT(3, 2, 2).then(function(result) {
    console.log("diên tích hình thang là: " + result);
});