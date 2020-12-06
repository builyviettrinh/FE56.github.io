/*
khởi tạo đối tượng từ lớp đối tương DanhSachNhanVien
*/
var dsnv = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

document.getElementById("btnThem").addEventListener("click", function() {
    document.getElementById("btnCapNhat").style.display = "none";
    document.getElementById("btnThemNV").style.display = "block";
    document.getElementById("btnCapNhat").style.display = "none";
    getEle("msnv").removeAttribute("disabled");
});

/*
them nhan vien
*/

document.getElementById("btnThemNV").addEventListener("click", function() {
    /*
    lay thong yin nhap lieu tu 6 o input 
    */
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var mk = getEle("password").value;
    var namSinh = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    //check validation
    var isValid = true;
    isValid &= validation.checkValidation(maNV, "tbMaNV", "Ma nv khong duoc rong") &&
        validation.checkLength(maNV, "tbMaNV", "vui long nhap tu 4~10 ki tu", 4, 10);

    isValid &= validation.checkValidation(hoTen, "tbTen", "Ten khong duoc rong") &&
        validation.checkLength(hoTen, "tbTen", "vui long nhap tu 4~15 ki tu", 4, 15) &&
        validation.checkCharacter(hoTen, "tbTen", "vui long nhap ki tu la chu cai tu a~z");

    isValid &= validation.checkValidation(email, "tbEmail", "email khong duoc rong") &&
        validation.checkLength(email, "tbEmail", "vui long nhap tu 5~30 ki tu", 5, 30) &&
        validation.checkEmailFormat(email, "tbEmail", "vui long nhap dinh dang email @xx.com");

    isValid &= validation.checkValidation(mk, "tbMatKhau", "Mk khong duoc rong") &&
        validation.checkLength(mk, "tbMatKhau", "vui long nhap tu 8~35 ki tu", 8, 35);

    isValid &= validation.checkValidation(namSinh, "tbNgay", "Nam sinh k duoc rong");

    isValid &= validation.checkSelected("chucvu", "tbChucVu", "vui long chon chuc vu");
    // lưu ý id ở đây là id của ele 

    if (!isValid) return;
    /*
    khoi tao doi tuong nhan vien tu lop doi tuong nhan vien
    */

    var nhanVien = new NhanVien(maNV, hoTen, email, mk, namSinh, chucVu);
    dsnv.themNhanVien(nhanVien);
    console.log(dsnv.arr);
    taoBang(dsnv.arr);
    setLocalStorage();

});

// function taoBang(arr) {
//     getEle("tableDanhSach").innerHTML = "";
//     for (var i = 0; i < arr.length; i++) {
//         //tao dong
//         var tagTR = document.createElement("tr");

//         //tao cot
//         var tagTD_MA = document.createElement("td");
//         var tagTD_HOTEN = document.createElement("td");
//         var tagTD_EMAIL = document.createElement("td");
//         var tagTD_NAMSINH = document.createElement("td");
//         var tagTD_CHUCVU = document.createElement("td");

//         //gan noi dung vao tung cot
//         tagTD_MA.innerHTML = arr[i].maNV;
//         tagTD_HOTEN.innerHTML = arr[i].hoTen;
//         tagTD_EMAIL.innerHTML = arr[i].email;
//         tagTD_NAMSINH.innerHTML = arr[i].namSinh;
//         tagTD_CHUCVU.innerHTML = arr[i].chucVu;

//         //append 5 cot
//         tagTR.appendChild(tagTD_MA);
//         tagTR.appendChild(tagTD_HOTEN);
//         tagTR.appendChild(tagTD_EMAIL);
//         tagTR.appendChild(tagTD_NAMSINH);
//         tagTR.appendChild(tagTD_CHUCVU);

//         //append dong vao tbody
//         getEle("tableDanhSach").appendChild(tagTR);

//     }
// }

function taoBang(arr) {
    // item đại diện cho từng object mà mình duyệt qua mảng
    // i đại diện cho số chỉ mục từng phần  phần tử trong mảng
    // ES6 + var  được thay bằng ${var}. chuỗi được thay bằng " " -> ` `
    var content = "";
    arr.map(function(item, i) {
        content += `
        <tr>
            <td>${item.maNV}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.namSinh}</td>
            <td>${item.chucVu}</td>
            <td>
                <button class="btn btn-info" data-toggle ="modal" data-target="#myModal" onclick="suaNhanVien('${item.maNV}')">Edit</button>
                <button class="btn btn-danger" onclick="xoaNhanVien('${item.maNV}')">Delete</button>
            </td>
        </tr>
        `
    });

    getEle("tableDanhSach").innerHTML = content;
}

// cap nhat nhanvien
getEle("btnCapNhat").addEventListener("click", function() {
    // lay thong tin nhap tu 6 o input
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var mk = getEle("password").value;
    var namSinh = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    var nhanVien = new NhanVien(maNV, hoTen, email, mk, namSinh, chucVu);
    // console.log(nhanVien);
    dsnv.updateNV(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
});

getEle("searchName").addEventListener("keyup", function() {
    var txtKeyword = getEle("searchName").value;
    // console.log(txtKeyword);
    var mangSearch = dsnv.searchNV(txtKeyword);
    taoBang(mangSearch);
})


function getLocalStorage() {
    /*
    lấy data từ local storage, chuyển thành Json
    */
    if (localStorage.getItem("DSNV")) {
        dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
        taoBang(dsnv.arr);
        setLocalStorage();
    }
};


function setLocalStorage() {
    /*
    lưu data xuống local storage . chuyển thành chuỗi
    */
    localStorage.setItem("DSNV", JSON.stringify(dsnv.arr));
};

function xoaNhanVien(maNV) {
    dsnv._xoaNhanVien(maNV);
    // console.log(maNV);
    taoBang(dsnv.arr);
};

function suaNhanVien(maNV) {
    document.getElementById("btnThemNV").style.display = "none";
    document.getElementById("btnCapNhat").style.display = "block";

    var nhanVien = dsnv.getInfoNV(maNV);

    console.log(nhanVien);

    /*
đổ data từ nhanVien ra ngoài các ô input
*/
    getEle("msnv").value = nhanVien.maNV;
    getEle("msnv").setAttribute("disabled", true);
    getEle("name").value = nhanVien.hoTen;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.mk;
    getEle("datepicker").value = nhanVien.namSinh;
    getEle("chucvu").value = nhanVien.chucVu;

}

function getEle(id) {
    return document.getElementById(id);
}