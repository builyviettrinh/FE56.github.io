// Check valiadation 
document.getElementById("btn-payment").addEventListener("click",function(){

    // khoi tao bien
    var checkbox = document.getElementsByName("selector");
    var _kmeter = document.getElementById("km").value; 
    var _time = document.getElementById("time").value;

    // check validation _carType
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
        // check validation _kmeter
        if( _kmeter === ""){
            window.alert("Vui lòng nhập vào số km");
        }
        else if( _kmeter <= 0){
            window.alert("Vui lòng nhập giá trị hợp lệ. (>0)");
        }
        // check validation _time
        else if( _time  < 0){
            window.alert("Vui lòng nhập giá trị hợp lệ. (>=0)");
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
        // if(ocument.getElementById("uberX").checked){
        //     document.getElementById("xuatTien").innerHTML = paymentX(_kmeter,_time);
        // }
        // else if(document.getElementById("uberSUV").checked){
        //     document.getElementById("xuatTien").innerHTML = paymentSUV(_kmeter,_time);
        // }
        // else if(document.getElementById("uberBlack").checked){{
        //     document.getElementById("xuatTien").innerHTML = paymentBlack(_kmeter,_time);
        // }
        //     document.getElementById("divThanhTien").style.display = "block";
    }

});

// testcase : -1,0, 0.5, 1,2,21,100  = error, error, 4, 8, 20, 246, 1036000
function paymentX(a,b){
    var total = 0;

    if(a <= 1){
         km = a*8000;    
    }
    else if(a <= 20){
        km = 1*8000 + (a-1)*12000; 
    }
    else {
        km = 1*8000 +  (20-1)*12000 + (a-20)*10000;
    }
    return total= km + 2000*b;
}

// testcase : -1,0, 0.5, 1,2,21,100  = error, error, 4.5, 23, 287, 1036000
function paymentSUV(a,b){
    var total= 0;
    if(a <= 1){
         km = a*9000;    
    }
    else if(a <= 20){
        km = 1*9000 + (a-1)*14000; 
    }
    else {
        km = 1*9000 + (20-1)*14000 + (a-20)*12000;
    }
    return total= km + 3000*b;
}

// testcase : -1,0, 0.5, 1,2,21,100  = error, error, 5,10,26,528, 2424
function paymentBlack(a,b){
    var total= 0;
    if( a <= 1){
         km = a *10000;    
    }
    else if( a <= 20){
        km = a *10000 + (a-1)*16000; 
    }
    else {
        km = a *10000 + (20-1)*16000 + (a-20)*14000;
    }
    return total = km + 4000*b;
}



