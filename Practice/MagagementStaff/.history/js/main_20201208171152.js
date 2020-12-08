/*
B1: tao cac lop doi tuong trong folder
- DanhSachNV
- NhanVien
-Validation

B2: tao doi tuong dsnv tu lop fdoi tuong DanhSachNV
*/
var dsnv = new DanhSachNV();
getLocalStorage();
// tao event khi click button them nhan vien
document.getElementById("btnThem").addEventListener("click", function () {
  // hide button cap nhat
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
});

// them nhan vien
getEle("btnThemNV").addEventListener("click", function () {
  /* lấy thông tin nhập liệu từ 6 ô input */
  var maNV = getEle("msnv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var mk = getEle("password").value;
  var ngaySinh = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  //Khởi tạo đối tượng nhanVien từ lớp đối tượng NhanVien
  var nhanVien = new NhanVien(maNV, tenNV, email, mk, ngaySinh, chucVu);
  // add nhan vien
  dsnv.addNV(nhanVien);
  // tao bang de hien thi danh sach nhan vien
  createTable(dsnv.arr); // luu y nho add mang goi tu dssv
  // luu du luu tren trinh duyet de F5 lai k mat
  setLocalStorage();
  // console.log(dsnv.arr); test xem input data co vao mang arr chua
});

// tao function de viet cho gon phan document.getElementById(")
function getEle(id) {
  return document.getElementById(id);
}

// tao bang de hien thi danh sach nhan vien
// B1: truyen mang vao bang
function createTable(arr) {
  // tao var de hien thi bang
  var content = "";
  arr.map(function (item, i) {
    content += `
        <tr>
            <td>${item.maNV}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngaySinh}</td>
            <td>${item.chucVu}</td>
            <td>
                <button class="btn btn-info " data-toggle="modal" data-target="#myModal" onclick="editNV('${item.maNV}')">Edit</button>
                <button class="btn btn-danger " onclick="deleteNV('${item.maNV}')">Delete</button>
            </td>
        </tr>
      `;
  });
  getEle("tableDanhSach").innerHTML = content;
}

// luu data xuong localStorage, chuyen thanh chuoi
function setLocalStorage() {
  // DSNV : ten storage , JSON.stringify : chuyen data thanh chuoi
  localStorage.setItem("DSNV", JSON.stringify(dsnv.arr));
}

function getLocalStorage() {
  // lay data tu localStorage , chuyen thanh JSON
  if (localStorage.getItem("DSNV")) {
    dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
    createTable(dsnv.arr);
  }
}

// delete nhan vien
function deleteNV(maNV) {
  dsnv.deleteNV(maNV);
  createTable(dsnv.arr);
  setLocalStorage();
}

//edit nhan vien
function editNV(maNV) {
  // hide button them nhan vien
  getEle("btnThemNV").style.display = "none";
  getEle("btnCapNhat").style.display = "block";

  var nhanVien = dsnv.getInfoNv(maNV);
  console.log(nhanVien);
}
