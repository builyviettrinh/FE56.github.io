function theFirst(callback) {
    // ham setTimeout : mô tả tiến trình chạy bất dồng bộ ( luôn luôn chạy sau)
    setTimeout(function() {
        console.log("theFirst");
        callback();
    }, 2000);
}

function theSecond() {
    console.log("theSecond");
}


theFirst(theSecond);