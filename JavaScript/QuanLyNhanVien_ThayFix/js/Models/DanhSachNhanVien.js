function DanhSachNhanVien() {
  this.arr = [];

  this.themNhanVien = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  this.timViTri = function (maNV) {
    /**
     * Tìm vị trí nhân viên
     * - Tạo 1 biến viTri = -1;
     * - Duyet mảng
     * - Kiểm tra maNV có trùng với maNV trong từng phần tử không?
     * - Nếu trùng => lấy số chỉ mục gán vào biến viTri
     */
    // var viTri = -1; // -1 k tìm thấy
    // this.arr.map(function (item, i) {
    //   if (maNV === item.maNV) {
    //     viTri = i;
    //   }
    // });

    return this.arr.findIndex(function (item) {
      return maNV === item.maNV;
    });

    // return viTri;
  };

  this._xoaNhanVien = function (maNV) {
    var viTri = this.timViTri(maNV);
    if (viTri !== -1) {
      this.arr.splice(viTri, 1);
    }
  };

  this.layThongTinNhanVien = function (maNV) {
    var viTri = this.timViTri(maNV);
    if (viTri !== -1) {
      return this.arr[viTri];
    }
  };

  // this.capNhatNhanVien = function(nhanVien){

  // }
}

DanhSachNhanVien.prototype.capNhatNhanVien = function (nhanVien) {
  var viTri = this.timViTri(nhanVien.maNV);
  if (viTri !== -1) {
    this.arr[viTri] = nhanVien;
  }
};

// DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
//   var mangTimKiem = [];
//   this.arr.map(function (item) {
//     if (item.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
//       mangTimKiem.push(item);
//     }
//   });
//   return mangTimKiem;
// };

DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
  return this.arr.filter(function (item) {
    return item.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });
};
