function hienThiThongTin(){
    /*
    lấy info user nhập vào 5 ô input
    */

   var _maSV = document.getElementById("txtMaSV").value;
   var _tenSV = document.getElementById("txtTenSV").value;
   var _loaiSV = document.getElementById("loaiSV").value;
   var _diemToan = document.getElementById("txtDiemToan").value;
   var _diemVan = document.getElementById("txtDiemVan").value;


/*
tạo đối tượng sinh viên
*/
    var sinhVien = {
        // key: value 
        // thuộc tính
        maSV:_maSV,
        tenSV: _tenSV,
        loaiSV: _loaiSV,
        diemToan: _diemToan,
        diemVan: _diemVan,

        // Phương thức 
        tinhDTB: function(){
            var dtb = (parseFloat(this.diemToan) +parseFloat(this.diemVan) )/2;
            return dtb;
        },

        xepLoai: function(dtb){
            var xepLoai = "";
            if(dtb <= 5 ){
                xepLoai = "yeu";
            }
            else if(dtb < 8){
                xepLoai = "kha";
            }
            else if(dtb <= 10){
                xepLoai = "gioi";         
            }
            return xepLoai;
        }
    };

     /*
     hiển thị thông tin
    */ 
   var diemTB = sinhVien.tinhDTB();
   document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
   document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
   document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
   document.getElementById("spanDTB").innerHTML = diemTB;   
   document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai(diemTB);
}