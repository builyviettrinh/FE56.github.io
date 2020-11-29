function themSinhVien(){
        /*
    lấy info user nhập vào 7 ô input
    */
   var maSV = document.getElementById("txtMaSV").value;
   var tenSV = document.getElementById("txtTenSV").value;
   var loaiSV = document.getElementById("loaiSV").value;
   var diemToan = document.getElementById("txtDiemToan").value;
   var diemLy = document.getElementById("txtDiemLy").value;
   var diemHoa = document.getElementById("txtDiemHoa").value;
   var diemRenLuyen = document.getElementById("txtDiemRenLuyen").value;

   var sinhVien = new SinhVien(maSV,tenSV,loaiSV,diemToan,diemLy,diemHoa,diemRenLuyen);

   console.log(sinhVien);

}