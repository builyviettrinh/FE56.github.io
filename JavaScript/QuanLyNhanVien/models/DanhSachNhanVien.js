function DanhSachNhanVien() {
    this.arr = [];

    this.themNhanVien = function(nhanVien) {
        this.arr.push(nhanVien);
    };

    // ham tim vi tri
    this.timViTri = function(maNV) {
        // buoc 1: tim vi tri nhan vien can xoa
        //map : duyet mang
        // tạo biến đặt tên viTri và gán giá tri cho nó là -1 ( k tìm thấy giá trị)
        // duyệt mảng -> kiểm tra mã nhan viên có 
        // trùng với maNV trong từng phần tử không?
        // nếu trùng thì lấy số chỉ mục gán vào biến viTri

        // var viTri = -1;
        // cach 1
        // this.arr.map(function(item, i) {
        //     if (maNV === item.maNV) {
        //         viTri = i;
        //     }
        // });

        //cach 2 su dung ham co san cua js
        // viTri = this.arr.findIndex(function(item) {
        //     return maNV === item.maNV;
        // });
        // return viTri;

        // cach 3 
        return viTri = this.arr.findIndex(function(item) {
            return maNV === item.maNV;
        });
        // return viTri;

    };

    // ham xoa nhan vien
    this._xoaNhanVien = function(maNV) {
        var viTri = this.timViTri(maNV);
        if (viTri !== -1) {
            //splice dung de xoa phan tu trong mang
            this.arr.splice(viTri, 1);
        }
    };

    // lay thong tin nhan vien
    this.getInfoNV = function(maNV) {
        var viTri = this.timViTri(maNV);
        if (viTri !== -1) {
            return this.arr[viTri];
        }

    };

    // ham sua nhan vien
    this._suaNhanVien = function(maNV) {

    };
}
// tach biet ra de khong anh huong code cua nguoi khac
DanhSachNhanVien.prototype.updateNV = function(nhanVien) {
    var viTri = this.timViTri(nhanVien.maNV);
    if (viTri !== -1) {
        this.arr[viTri] = nhanVien;
    }
}

// DanhSachNhanVien.prototype.searchNV = function(keyword) {
//     var mangTimKiem = [];
//     this.arr.map(function(item) {
//         if (item.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
//             mangTimKiem.push(item);

//         }
//     });
//     return mangTimKiem;
// }

// su dung filter. duyet qua tung cai , k co thi xoa .
DanhSachNhanVien.prototype.searchNV = function(keyword) {
    return this.arr.filter(function(item) {
        return item.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
}