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
  getEle("btnthemNV").style.display = "block";
});

// tao function de viet cho gon phan document.getElementById(")
function getEle(id) {
  return document.getElementById(id);
}
