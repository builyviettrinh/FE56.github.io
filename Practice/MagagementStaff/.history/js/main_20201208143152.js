/*
B1: tao cac lop doi tuong trong folder
- DanhSachNV
- NhanVien
-Validation

B2: tao doi tuong dsnv tu lop fdoi tuong DanhSachNV
*/
// var dsnv = new DanhSachNV();

// tao event khi click button them nhan vien

// hide button cap nhat
document.getElementById("btnThem").addEventListener("click", function () {
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
});

// them nhan vien
document /
  getEle("btnThemNV").addEventListener("click", function () {
    /* lấy thông tin nhập liệu từ 6 ô input */
    var maNV = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;
  });
// tao function de viet cho gon phan document.getElementById(")
function getEle(id) {
  return document.getElementById(id);
}
