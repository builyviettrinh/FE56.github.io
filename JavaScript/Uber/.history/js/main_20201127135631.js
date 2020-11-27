// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){

    // khoi tao bien
    var checkbox = document.getElementsByName("selector");
    var _kmeter = document.getElementById("km").value; 
    var _time = document.getElementById("time").value;

    // check validation 
 
    for(var i = 0; i< checkbox.length; i++){
        var _carType = "";
        if(checkbox[i].checked){
            _carType = checkbox[i].getAttribute("id");break;
        }
    }

    if( _carType === ""){
        window.alert("Vui lòng chọn loại xe.");
    }
    else{
         if( _kmeter === ""){
            window.alert("Vui lòng nhập vào số km");
        }
        else if( _time === ""){
            window.alert("Vui lòng nhập thời gian chờ");
        }
        else{
            // so sanh 3 gia tri cua carType
            if(_carType ==="uberX"){
                document.getElementById("xuatTien").innerHTML = paymentX(_kmeter,_time);
            }
            else if( _carType ==="uberSUV"){
                document.getElementById("xuatTien").innerHTML = paymentSUV(_kmeter,_time);
            }
            else {
                document.getElementById("xuatTien").innerHTML = paymentBlack(_kmeter,_time);
            }
                document.getElementById("divThanhTien").style.display = "block";
    }

        // cach 2 
        // if(_carType === document.getElementById("uberX").checked){
        //     document.getElementById("xuatTien").innerHTML = paymentX(_kmeter,_time);
        // }
        // else if( _carType === document.getElementById("uberSUV").checked){
        //     document.getElementById("xuatTien").innerHTML = paymentSUV(_kmeter,_time);
        // }
        // else {
        //     document.getElementById("xuatTien").innerHTML = paymentBlack(_kmeter,_time);
        // }
        //     document.getElementById("divThanhTien").style.display = "block";
    }

});

// nho gan const
function paymentX(_kmeter,_time){
    var total = 0;
    if(_kmeter <= 0){
        window.alert("Vui long Nhập lai"); 
    }
    else if(_kmeter <= 1){
         km = _kmeter*8000;    
    }
    else if(_kmeter <= 20){
        km = _kmeter*12000; 
    }
    else {
        km = _kmeter*10000;
    }
    return total= km + 2000*_time;
}

function paymentSUV(_kmeter,_time){
    var total= 0;
    if(_kmeter <= 0){
        window.alert("Vui long Nhập lai");
    }
    else if(_kmeter <= 1){
         km = _kmeter*9000;    
    }
    else if(_kmeter <= 20){
        km = _kmeter*14000; 
    }
    else {
        km = _kmeter*12000;
    }
    return total= km + 3000*_time;
}

function paymentBlack(_kmeter,_time){
    var total= 0;
    if(_kmeter <= 0){
        window.alert("Vui long Nhập lai");
    }
    else if(_kmeter <= 1){
         km = _kmeter*10000;    
    }
    else if(_kmeter <= 20){
        km = _kmeter*16000; 
    }
    else {
        km = _kmeter*14000;
    }
    return total = km + 4000*_time;
}



