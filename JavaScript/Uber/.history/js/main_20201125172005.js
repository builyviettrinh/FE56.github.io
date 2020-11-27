// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){
    // var carType = document.getElementById("uberX").value; 
    var _kmeter = document.getElementById("km").value; 
    var _time = document.getElementById("time").value; 

    if(_kmeter == "" && _time == ""){
        window.alert("Vui long nhap thong tin");
    }
    if(_kmeter == ""){
        window.alert("Vui long Nhập vào số KM");
    }
    if(_time == ""){
        window.alert("Vui long Nhập thời gian chờ");
    }


});
