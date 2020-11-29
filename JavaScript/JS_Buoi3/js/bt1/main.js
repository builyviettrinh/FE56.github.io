function hienThiThongTin(){
    /*
    lấy info user nhập vào 5 ô input
    */
   var maSV = document.getElementById("txtMaSV").value;
   var tenSV = document.getElementById("txtTenSV").value;
   var loaiSV = document.getElementById("loaiSV").value;
   var diemToan = document.getElementById("txtDiemToan").value;
   var diemVan = document.getElementById("txtDiemVan").value;

   console.log(maSV,tenSV,loaiSV,diemToan,diemVan);

    /*
     hiển thị thông tin
    */ 
   var dtb = tinhDiemTB(diemToan,diemVan);
   document.getElementById("spanTenSV").innerHTML = tenSV;
   document.getElementById("spanMaSV").innerHTML = maSV;
   document.getElementById("spanLoaiSV").innerHTML = loaiSV;
   document.getElementById("spanDTB").innerHTML = dtb;   
   document.getElementById("spanXepLoai").innerHTML = xepLoaiSV(dtb);
}

    /*
     hàm tính điểm trung bình
    */ 
   function tinhDiemTB(toan,van){
       var dtb = (parseFloat(toan) + parseFloat(van))/2;
       return dtb;
   }

       /*
     hàm tính xếp loại
    */ 
   function xepLoaiSV(dtb){
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

