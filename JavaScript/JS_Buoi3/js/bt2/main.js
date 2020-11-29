var danhSachSinhVien = []; 

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

   // khoi tao mang danhSachSinhVien
   // push : truyen vao mang danhSachSinhVien phan tu sinhVien

   danhSachSinhVien.push(sinhVien);
   
   taoBang();
}

// tao bang ket qua 
function taoBang(){
    // reset laij tbody
    document.getElementById("tbodySinhVien").innerHTML = "";
    
    for(var i =0; i< danhSachSinhVien.length; i++){
        // cu phap tao the html
        //tao dòng
        var tagTR = document.createElement("tr");

        //tạo cột
        var tagTD_Ma = document.createElement("td");
        var tagTD_TEN = document.createElement("td");
        var tagTD_LOAI = document.createElement("td");
        var tagTD_DTB = document.createElement("td");
        var tagTD_DRL = document.createElement("td");

        // gán nội dung vào cột
        tagTD_Ma.innerHTML = danhSachSinhVien[i].maSV;
        tagTD_TEN.innerHTML = danhSachSinhVien[i].tenSV;
        tagTD_LOAI.innerHTML = danhSachSinhVien[i].loaiSV;
        tagTD_DTB.innerHTML = danhSachSinhVien[i].tinhDTB();
        tagTD_DRL.innerHTML = danhSachSinhVien[i].diemRenLuyen;

        // append 5 cột vào dòng
        tagTR.appendChild(tagTD_Ma);
        tagTR.appendChild(tagTD_TEN);
        tagTR.appendChild(tagTD_LOAI);
        tagTR.appendChild(tagTD_DTB);
        tagTR.appendChild(tagTD_DRL);

        // append dòng vào tbody
        document.getElementById("tbodySinhVien").appendChild(tagTR);
    }
}