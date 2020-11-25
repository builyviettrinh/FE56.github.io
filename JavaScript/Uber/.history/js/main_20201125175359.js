// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){
    // var carType = document.getElementById("uberX").value; 
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
        function payment(a,b)
    }
});

function payment(a,b){
    var _payment = a*b;
    document.getElementById("xuatTien").style.backgroundColor ="orange";
    document.getElementById("xuatTien").innerHTML ="Thành tiền:"+_payment +"vnd"; 

};

