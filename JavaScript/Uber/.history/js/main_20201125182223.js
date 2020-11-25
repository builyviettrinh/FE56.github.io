// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){
    var _carTypeX = document.getElementById("uberX").value; 
    var _carTypeS = document.getElementById("uberSUV").value;
    var _carTypeB = document.getElementById("uberBlack").value;
    var _kmeter = document.getElementById("km").value; 
    var _time = document.getElementById("time").value; 

    if(_kmeter == "" && _time == "" && _carTypeX =="" && _carTypeS =="" && _carTypeB ==""){
        window.alert("Vui long nhap thong tin");
    }
    else if(_kmeter == ""){
        window.alert("Vui long Nhập vào số KM");
    }
    else if(_time == ""){
        window.alert("Vui long Nhập thời gian chờ");
    }
    else{
        var _carType;
         payment(_kmeter,_time);
    }
});
function paymentX(a,b,c){
    var total;
    if(b <= 1){
        total = b*8000;    
    }
    else if(b <= 20){
        total = b*12000; 
    }

}
function payment(a,b){

    var _payment = a*b;
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML =_payment; 

};

