console.log("hello");
//  Biến
var userName = "hello abc";

var address = "112 cao thang";
// console.log("ten: " + userName);
// console.log("dia chi: "+address);
console.log("ten: " + userName, "dia chi: " + address);

// bien null 
var number = null;
console.log(number);

// undefined
var people;
console.log(people);

// hoisting : vẫn chạy được và biến đó được gán underfined
console.log("full name: " + fullName);
var fullName = " nguyen van A";

// khi không sử dụng var
isLogin = true;
console.log(" isLogin =", isLogin);

// truong hop bao loi
// console.log(student);

// hang so 
const PI = 3.14;

// cau lenh dieu kien 

//so sanh gia tri
if (1 == "1") {
    // chay cac dong lenh trong day
    console.log("dien kien dung");
} else {
    console.log("dien kien sai");
}

// so sanh ca kieu du lieu
if (1 === "1") {
    // chay cac dong lenh trong day
    console.log("dien kien dung");
} else {
    console.log("dien kien sai");
}

// toán tử 3 ngôi 
// DK ? "dung" : "sai"
2 == "2" ? console.log("2 dieu kien dung") : console.log("2 dieu kien sai");

var btA = true;
var btB = false;

console.log("ket qua la: ", btA && btB);
console.log("ket qua la: ", btA || btB);
console.log("phu dinh cuar btA: : ", !btA);
console.log("phu dinh cuar btA: : ", !btB);

switch (7) {
    case 0:
        console.log("day la so 0");
        break;

    case 1:
        console.log("day la so 1");
        break;

    case 2:
        console.log("day la so 2");
        break;
    default:
        console.log("khong xac dinh");

}

// mảng 
// so chi muc la 0 
var list = ["nguyen", "huong", "lan", "Nan"];
console.log(list[1]);

// vong lap
for(var i=0; i< list.length;i++){
    console.log(list[i]);
}

// so + chuoi = chuoi
var number_1 = 10;
var number_2 = "5";
var number_3 = 20;
var number_4 = 7;


var total = number_1 + number_2;
console.log("tong: ",total);
var total2 = number_3 + number_4;
console.log("tong: ",total2);

// ham function 
// có thể gọi hàm trước khi khai báo cũng được

// ham k co tham so
// function tinhTong(){
//     var sum = number_1 + number_2;
//     console.log("tong sum: ",sum);
// }
// tinhTong();

// function tinhTong34(){
//     var sum = number_3 + number_4;
//     console.log("tong sum34: ",sum);
// }
// tinhTong34();

// ham co tham so 
function tinhTong(a,b){
    var sum = a + b;
    console.log("tong sumAB: ",sum );
}
tinhTong(number_1, number_2);
tinhTong(number_3, number_4);
tinhTong(100, 10);

// ham  khong co gia tri tra ve 

// ham co gia tri tra ve 
function tinhTong(a,b){
    var sum = a - b;
    return sum; 
}
// var sum = tinhTong(50, 12);
// console.log("tong sumTru: ",sum );

console.log("tong sumTru: ",tinhTong(50, 12) + 30);

// bai tap 
// tinh diem trung binh: Toan, Ly, Hoa
// nhap tu 0 ~ 10
// dtb = (toan + ly + hoa) / 3
// xep loai hoc sinh 
// 9 < dtb < 10 => xuat sac
// 

function tinhDiemTB(a,b,c){
    var dtb = (a+b+c) / 3;
    return dtb;   
}


function xepLoai(diemTB){
    if(diemTB >= 9 && diemTB  <= 10) {
        loai = "xuat sac";
    }
    else if(diemTB >= 8) {
        loai = "gioi";
    }
    else if(diemTB >= 7) {
        loai= "kha";
    }
    else if(diemTB >= 5){
        loai = "trung binh";
    }
    else {
        loai = "yeu";
    }

    console.log("hoc vien A: ",loai);
}
var diemTB = tinhDiemTB(9,10,9);
console.log(xepLoai(diemTB));

// DOM 
// var txtInput = document.getElementById("txtInput");
// console.log(txtInput.value);

// cách 2 
var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);

// var pText = document.getElementById("pText");
// console.log(pText.innerHTML);

// cach 2 
var pText = document.getElementById("pText").innerText;
console.log(pText);

// cach 1 
// function evenClick() {
//     var txtInput = document.getElementById("txtInput").value;
//     console.log(txtInput);
// }

// cach 2
// document.getElementById("btnClick").onclick = function (){
//     var txtInput = document.getElementById("txtInput").value;
//     console.log(txtInput);
// }

// cach 3 : callback function
// document.getElementById("btnClick").addEventListener("click",function(){
//      var txtInput = document.getElementById("txtInput").value;
//      console.log(txtInput);
// })

function demoClick(){
    var txtInput =document.getElementById("txtInput").value;
    console.log(txtInput);
};

document.getElementById("btnClick").addEventListener("click",demoClick);

document.getElementById("btnNhan").addEventListener("click",function(){
    console.log("123");
    var pText = document.getElementById("pChange").innerHTML = "da thay doi";
    document.getElementById("pChange").style.backgroundColor ="blue";
    document.getElementById("pChange").style.color = "#fff";
    document.getElementById("pChange").style.padding = "10px";
});

document.getElementById("hide").addEventListener("click",function(){
    var pText = document.getElementById("pChange").style.display = "none";
});
document.getElementById("show").addEventListener("click",function(){
    var pText = document.getElementById("pChange").style.display = "block";
})

document.getElementById("hideBtn").addEventListener("click",function(){
    // var pText = document.getElementById("btnNhan").style.display = "none";
    document.getElementById("btnNhan").disabled = true;
})

document.getElementById("showBtn").addEventListener("click",function(){
    // var pText = document.getElementById("btnNhan").style.display = "none";
    document.getElementById("btnNhan").disabled = false;
})

document.getElementById("btnOn").addEventListener("click",function(){
    var pText = document.getElementById("lightImg").src = "./imgs/pic_bulbon.gif";
})

document.getElementById("btnOff").addEventListener("click",function(){
    var pText = document.getElementById("lightImg").src = "./imgs/pic_bulboff.gif";
})

document.getElementById("btnLogin").addEventListener("click",function(){
    var id = document.getElementById("userName").value;
    var pass = document.getElementById("passWord").value;
    console.log(id);
    console.log(pass);

    // check validation
    var user1 = "an";
    var pass1 = " 123";
    // username === "an"  && password ==  "123"
    // id == user1 && pass == pass1
    if(id === "an" && pass === "123"){
        changeColor2("login thanh cong","alert alert-success");
        // changeColor("login thanh cong", "green");
        // console.log("dang nhap thanh cong");
        // document.getElementById("showMsg").style.display = "block";
        // document.getElementById("showMsg").innerHTML = "dang nhap thanh cong";
        // document.getElementById("showMsg").style.backgroundColor = "green";
        // document.getElementById("showMsg").style.color = "#fff";
        
    }
    else {
        changeColor2("login that bai","alert alert-danger");
        // console.log("dang nhap that bai");
        // changeColor("login that bai", "red");
        // document.getElementById("showMsg").style.display = "block";
        // document.getElementById("showMsg").innerHTML = "dang nhap that bai";
        // document.getElementById("showMsg").style.backgroundColor = "red";
        // document.getElementById("showMsg").style.color = "#fff";
    }
});

function changeColor(mess,bg){
    document.getElementById("showMsg").innerHTML = mess;
    document.getElementById("showMsg").style.display = "block";
    document.getElementById("showMsg").style.backgroundColor = bg;
    document.getElementById("showMsg").style.color = "#fff";
}
function changeColor2(mess,classes){
    document.getElementById("showMsg").style.display = "block";
    document.getElementById("showMsg").innerHTML = mess;
    document.getElementById("showMsg").className = classes;

}

// dom tagname 
var  tagname = document.getElementsByTagName("button")[1];
console.log(tagname);

var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

// dom querySelector

var _querySelector = document.querySelector(".container #showMsg");
console.log(_querySelector);

// dom querySelectorAll

var _querySelectorAll = document.querySelectorAll(".container .form-group");
console.log(_querySelectorAll);

// vi du tinh tien tip

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var tongTien = document.getElementById("txtTongTien").value;
    var phanTram = document.getElementById("slPhanTramTip").value;
    var tongNguoi = document.getElementById("txtSoNguoi").value;
    
    var tienTiep = (tongTien*phanTram)/100/tongNguoi;
    // document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").className = "alert alert-danger d-block";

    document.getElementById("txtThongBaoTienTip").innerHTML = "so tien tip cua moi nguoi la " + tienTiep;


})

