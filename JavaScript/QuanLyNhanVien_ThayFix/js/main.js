/**
 * Khởi tạo đối tượng dsnv từ lớp đối tượng DanhSachNhanVien
 */
var dsnv = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

document.getElementById("btnThem").addEventListener("click", function () {
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
  getEle("msnv").removeAttribute("disabled");
});

/**
 * Thêm Nhân Viên
 */
document.getElementById("btnThemNV").addEventListener("click", function () {
  /**
   * lấy thông tin nhập liệu từ 6 ô input
   */
  var maNV = getEle("msnv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  /**
   * Kiểm tra Validation
   */
  var isValid = true;

  isValid &=
    validation.kiemTraRong(maNV, "tbMaNV", "(*) manv k dc rỗng") &&
    validation.kiemTraDoDaiKyTu(
      maNV,
      "tbMaNV",
      "(*) Vui lòng nhập từ 4-10 ký tự",
      4,
      10
    );
  isValid &=
    validation.kiemTraRong(tenNV, "tbTen", "(*) ten k dc rỗng") &&
    validation.kiemTraChuoi(tenNV, "tbTen", "(*) Vui lòng nhập chuỗi");
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "(*) email k dc rỗng") &&
    validation.kiemTraEmail(email, "tbEmail", "(*) Email k đúng định dạng");
  isValid &= validation.kiemTraRong(
    matKhau,
    "tbMatKhau",
    "(*) password k dc rỗng"
  );
  isValid &= validation.kiemTraRong(date, "tbNgay", "(*) date k dc rỗng");
  isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "(*) Chọn chức vụ");

  if (!isValid) return;

  /**
   * Khởi tạo đối tượng nhanVien từ lớp đối tượng NhanVien
   */
  var nhanVien = new NhanVien(maNV, tenNV, email, matKhau, date, chucVu);
  dsnv.themNhanVien(nhanVien);
  taoBang(dsnv.arr);
  setLocalStorage();
});

// function taoBang(arr) {
//   getEle("tableDanhSach").innerHTML = "";
//   for (var i = 0; i < arr.length; i++) {
//     //Tao dong
//     var tagTR = document.createElement("tr");

//     //Tao cot
//     var tagTD_MA = document.createElement("td");
//     var tagTD_TEN = document.createElement("td");
//     var tagTD_EMAIL = document.createElement("td");
//     var tagTD_DATE = document.createElement("td");
//     var tagTD_CHUCVU = document.createElement("td");

//     //Gan noi dung vao cho cot
//     tagTD_MA.innerHTML = arr[i].maNV;
//     tagTD_TEN.innerHTML = arr[i].hoTen;
//     tagTD_EMAIL.innerHTML = arr[i].email;
//     tagTD_DATE.innerHTML = arr[i].date;
//     tagTD_CHUCVU.innerHTML = arr[i].chucVu;

//     //append 5 cot vao dong
//     tagTR.appendChild(tagTD_MA);
//     tagTR.appendChild(tagTD_TEN);
//     tagTR.appendChild(tagTD_EMAIL);
//     tagTR.appendChild(tagTD_DATE);
//     tagTR.appendChild(tagTD_CHUCVU);

//     //append dong vao tbody
//     getEle("tableDanhSach").appendChild(tagTR);
//   }
// }

function taoBang(arr) {
  var content = "";
  arr.map(function (item, i) {
    /**
     * item đại diện cho từng object khi duyệt qua mảng
     * i đại diện cho số chỉ mục từng phần phần tử trong mảng
     */
    content += `
      <tr>
        <td>${item.maNV}</td>
        <td>${item.hoTen}</td>
        <td>${item.email}</td>
        <td>${item.date}</td>
        <td>${item.chucVu}</td>
        <td>
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${item.maNV}')">Sua</button>
          <button class="btn btn-danger" onclick="xoaNhanVien('${item.maNV}')">Xoa</button>
        </td>
      </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML = content;
}

/**
 * Xoa nhan vien
 */
function xoaNhanVien(maNV) {
  dsnv._xoaNhanVien(maNV);
  taoBang(dsnv.arr);
  setLocalStorage();
}

/**
 * Sua Nhan Vien
 */
function suaNhanVien(maNV) {
  getEle("btnThemNV").style.display = "none";
  getEle("btnCapNhat").style.display = "block";

  var nhanVien = dsnv.layThongTinNhanVien(maNV);
  console.log(nhanVien);

  /**
   * đổ data từ nhanVien ra ngoài các ô input
   */
  getEle("msnv").value = nhanVien.maNV;
  getEle("msnv").setAttribute("disabled", true);
  getEle("name").value = nhanVien.hoTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.date;
  getEle("chucvu").value = nhanVien.chucVu;
}

/**
 * Cap nhat Nhan Vien
 */
getEle("btnCapNhat").addEventListener("click", function () {
  /**
   * lấy lại những thông mới từ các ô input
   */
  var maNV = getEle("msnv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var nhanVien = new NhanVien(maNV, tenNV, email, matKhau, date, chucVu);
  dsnv.capNhatNhanVien(nhanVien);
  taoBang(dsnv.arr);
  setLocalStorage();
});

getEle("searchName").addEventListener("keyup", function () {
  var txtKeyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemNhanVien(txtKeyword);
  taoBang(mangTimKiem);
});

function getLocalStorage() {
  /**
   *  Lấy data từ localStorage, chuyển thành JSON
   */
  if (localStorage.getItem("DSNV")) {
    dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
    taoBang(dsnv.arr);
  }
}

function setLocalStorage() {
  /**
   *  Lưu data xuống localStorage, chuyển thành chuỗi
   */
  localStorage.setItem("DSNV", JSON.stringify(dsnv.arr));
}

function getEle(id) {
  return document.getElementById(id);
}
