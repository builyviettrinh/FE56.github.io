function DanhSachNV() {
  // tao mang chua thong tin nhan vien
  this.arr = [];

  // tao ham them nhan vien
  this.addNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  // B1: tim vi tri nhan vien can xoa
  return (this.timViTri = function (maNV) {
    this.arr.findIndex(function (item) {
      return maNV === item.maNV;
    });
  });
  // xoa nhan vien

  this.deleteNV = function (maVN) {};
}
