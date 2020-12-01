document.getElementById("btn-payment").addEventListener("click",function(){

    // khoi tao bien
    var checkbox = document.getElementsByName("selector");
    var _kmeter = document.getElementById("km").value; 
    var _time = document.getElementById("time").value;

    checkValidation(checkbox,_kmeter,_time);
    var _carType = checkValidation(checkbox,_kmeter,_time);

    // so sanh 3 gia tri cua carType
    if(_carType != "" && _kmeter != "" && _time != ""){
        var payX = paymentX(_kmeter,_time);
        var paySUV = paymentSUV(_kmeter,_time);
        var payBlack = paymentBlack(_kmeter,_time);
        if(_carType ==="uberX"){
            document.getElementById("xuatTien").innerHTML = payX;
        }
        else if( _carType ==="uberSUV"){
            document.getElementById("xuatTien").innerHTML = paySUV;
        }
        else {
            document.getElementById("xuatTien").innerHTML = payBlack;
        }
            document.getElementById("divThanhTien").style.display = "block";
    }

});

// check validation
    // _carType
function checkValidation(checkbox,_kmeter,_time){
    for(var i = 0; i< checkbox.length; i++){
        var checkboxID = "";
        if(checkbox[i].checked){
            checkboxID = checkbox[i].getAttribute("id");break;
        }
    }
    if( checkboxID === ""){
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
    }
    return checkboxID;
}

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

// tạo danh sách hóa đơn
var listPayment = [];
document.getElementById("printBill").addEventListener("click",function(){
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
                var payX = paymentX(_kmeter,_time);
                var paySUV = paymentSUV(_kmeter,_time);
                var payBlack = paymentBlack(_kmeter,_time);
            }
        }

    listPayment.push(_carType,_kmeter,_time,payX);

    addTable();
})

// tao bảng hoá đơn
function addTable(){
    document.getElementById("tbodyHoaDon").innerHTML = "";

    for(var i = 0; i < listPayment.length; i++ ){
        // tao dong
        var tagTR = document.createElement("tr");

        // tạo cột   
        var  tagTD_type = document.createElement("td");
        var  tagTD_km = document.createElement("td");
        var  tagTD_time = document.createElement("td");
        var  tagTD_pay = document.createElement("td");   

        // gán nội dung vào cột
        tagTD_type.innerHTML = listPayment[i]._carType;
        tagTD_km.innerHTML = listPayment[i]._kmeter;
        tagTD_time.innerHTML = listPayment[i]._time;
        tagTD_pay.innerHTML = listPayment[i].payX;

        // append 5 cột vào dòng
        tagTR.appendChild(tagTD_type);
        tagTR.appendChild(tagTD_km);
        tagTR.appendChild(tagTD_time);
        tagTR.appendChild(tagTD_pay);

        // append dòng vào tbody
        document.getElementById("tbodyHoaDon").appendChild(tagTR);

    }
}





