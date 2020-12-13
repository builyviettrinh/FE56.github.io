function cong(a, b, callback) {
    setTimeout(function() {
        callback(a + b);
    }, 2000);
}

// cong(3, 2, function(result) {
//     console.log(result);
// });

function nhan(a, b, callback) {
    setTimeout(function() {
        callback(a * b);
    }, 2000);
}



function chia(a, b, callback) {
    setTimeout(function() {
        callback(a / b);
    }, 2000);
}



function dienTichHT(a, b, h, callback) {
    cong(a, b, function(resultCong) {
        nhan(resultCong, h, function(resultNhan) {
            chia(resultNhan, 2, function(resultChia) {
                callback(resultChia);
            });
        });
    });
}

dienTichHT(2, 3, 5, function(resultChia) {
    console.log("diên tích hình thang là: " + resultChia);
});