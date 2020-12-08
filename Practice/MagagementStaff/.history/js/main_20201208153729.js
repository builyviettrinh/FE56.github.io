/*
B1: tao cac lop doi tuong trong folder
- DanhSachNV
- NhanVien
-Validation

B2: tao doi tuong dsnv tu lop fdoi tuong DanhSachNV
*/
var dsnv = new DanhSachNV();

// tao event khi click button them nhan vien

// hide button cap nhat
document.getElementById("btnThem").addEventListener("click", function () {
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
  dsnv.addNV(nhanVien);
  // tao bang de hien thi danh sach nhan vien

  // console.log(dsnv.arr); test xem input data co vao mang arr chua
});

// tao function de viet cho gon phan document.getElementById(")
function getEle(id) {
  return document.getElementById(id);
}

// tao bang de hien thi danh sach nhan vien
// B1: truyen mang vao bang
function createTable(arr) {
  var content = "";
}
