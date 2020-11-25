// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){
    var carTypeX = document.getElementById("uberX").value; 
    var carTypeS = document.getElementById("uberSUV").value;
    var carTypeB = document.getElementById("uberBlack").value;
    var _kmeter = document.getElementById("km").value; 
    var _time = document.getElementById("time").value; 

    if(_kmeter == "" && _time == ""){
        window.alert("Vui long nhap thong tin");
    }
    else if(_kmeter == ""){
        window.alert("Vui long Nhập vào số KM");
    }
    else if(_time == ""){
        window.alert("Vui long Nhập thời gian chờ");
    }
    else{
         payment(_kmeter,_time);
    }
});

function payment(a,b){
    var _payment = a*b;
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML =_payment; 

};

