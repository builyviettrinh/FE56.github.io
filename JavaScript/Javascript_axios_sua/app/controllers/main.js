var service = new NguoiDungService();

showListUser();

getEle("btnThemNguoiDung").addEventListener("click", function() {
    document.getElementsByClassName("modal-title")[0].innerHTML =
        "Thêm người dùng";

    var footerModal =
        "<button class='btn btn-success' onclick='addUser()'>Add User</button>";

    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal;
});

function showListUser() {
    service
        .getListUserApi()
        .then(function(result) {
            createTable(result.data);
        })
        .catch(function(err) {
            console.log(err);
        });
}

function createTable(listUser) {
    var content = "";
    listUser.map(function(user, index) {
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.taiKhoan}</td>
                <td>${user.matKhau}</td>
                <td>${user.hoTen}</td>
                <td>${user.email}</td>
                <td>${user.soDT}</td>
                <td>${user.maLoaiNguoiDung}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editUser(${user.id
      })">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteUser(${user.id
      })">Xóa</button>
                </td>
            </tr>
        `;
    });
    getEle("tblDanhSachNguoiDung").innerHTML = content;
}

/**
 * Sửa người dùng
 */
function editUser(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML =
        "Sửa người dùng";
    var footerModal =
        `<button class='btn btn-success' onclick='updateUser(${id})'>Update User</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal;

    service
        .getUserById(id)
        .then(function(result) {
            console.log(result.data);
            /*
            đổ data từ nhanVien ra ngoài các ô input
            */
            getEle("TaiKhoan").value = result.data.taiKhoan;
            getEle("HoTen").value = result.data.hoTen;
            getEle("MatKhau").value = result.data.mk;
            getEle("Email").value = result.data.email;
            getEle("SoDienThoai").value = result.data.soDT;
            getEle("loaiNguoiDung").value = result.data.maLoaiNguoiDung;

        })
        .catch(function(err) {
            console.log(err);
        })
}

/**
 * updater user
 */
function updateUser(id) {
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var mk = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var sodt = getEle("SoDienThoai").value;
    var loaiUser = getEle("loaiNguoiDung").value;

    var user = new NguoiDung(id, taiKhoan, hoTen, mk, email, sodt, loaiUser);
    console.log(user);

    service
        .updateUserApi(user)
        .then(function(result) {
            alert("update success");
            showListUser();
        })
        .catch(function(err) {
            console.log(err);
        });
}

/**
 * Xóa User
 */
function deleteUser(id) {
    service
        .deleteUserApi(id)
        .then(function(result) {
            alert("Xoa thanh cong");
            showListUser();
        })
        .catch(function(err) {
            console.log(err);
        });
}

/**
 * add User
 */
function addUser() {
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var mk = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var sodt = getEle("SoDienThoai").value;
    var loaiUser = getEle("loaiNguoiDung").value;

    var user = new NguoiDung("", taiKhoan, hoTen, mk, email, sodt, loaiUser);
    // console.log(user);
    service
        .addUserApi(user)
        .then(function(result) {
            alert("add success");
            showListUser();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(err) {
            console.log(err);
        })
}

function getEle(id) {
    return document.getElementById(id);
}