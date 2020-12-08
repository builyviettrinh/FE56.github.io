function DanhSachNV() {
  // tao mang chua thong tin nhan vien
  this.arr = [];

  // tao ham them nhan vien
  this.addNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  // B1: tim vi tri nhan vien can xoa
  this.timViTri = function (maNV) {
    return this.arr.findIndex(function (item) {
      return maNV === item.maNV;
    });
  };

  // xoa nhan vien
  this.deleteNV = function (maNV) {
    var viTri = this.timViTri(maNV);
    if (viTri !== -1) {
      this.arr.splice(viTri, 1);
    }
  };

  // lay thong tin nhan vien
  this.getInfoNv = function(maNV){
      var viTri = this.timViTri(maNV);
      if( viTri !== -1){
          return this.arr[viTri];
      }

}
