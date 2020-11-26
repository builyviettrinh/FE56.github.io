// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){
    
    // var _carType = document.querySelector('input[name = "selector"]:checked').value;
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
        // tìm ra value của radio 
        //  function dataByClassName(st){
        //     var value=document.getElementsByName(selector);
        //     for(var i=0;i < value.length;i++){
        //         if(value[i].checked){
        //             return value[i].id;
        //         }
        //     }
        // }
        // var _carType = dataByClassName("Rm");
        
        var _carType = gRadioValue; 

        // so sanh 3 gia tri
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

    }
});

// nho gan const giaCuoc 
function paymentX(_kmeter,_time){
    var total;
    if(_kmeter <= 0){
        window.alert("Vui long Nhập lai"); break;
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
    total= km + 2000*_time;
}

function paymentSUV(_kmeter,_time){
    var total;
    if(_kmeter <= 0){
        window.alert("Vui long Nhập lai");break;
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
    total= km + 3000*_time;
}

function paymentBlack(_kmeter,_time){
    var total;
    if(_kmeter <= 0){
        window.alert("Vui long Nhập lai");break;
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
    total= km + 4000*_time;
}



