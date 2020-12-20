import { callApi, getListProduct, deleteProductApi } from "./../src/utils/callapi.js";
import Product from "./../src/models/product.js";
import { addProductApi, getProductById, updateProductbyId } from "./../src/utils/callapi.js";

const getEle = (id) => {
    return document.getElementById(id);
}

const renderHTML = () => {
    const content = `
        <div class="card text-white bg-dark">
        <div class="card-body">
            <h4 class="card-title">Danh sách sản phẩm</h4>
            <div class='container'>
                <div class="row">
                    <div class="col-md-3">
                        <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
                    </div>
                    <div class="col-md-3">
                        <input id="tenSP" class="form-control" placeholder="Tên SP" />
                    </div>
                    <div class="col-md-3">
                        <input id="gia" class="form-control" placeholder="Giá" />
                    </div>
                    <div class="col-md-3">
                        <input id="hinhAnh" class="form-control" placeholder="Link hình" />
                    </div>
                </div>
                <br />
                <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
                <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
            </div>
        </div>
    </div>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Mã SP</th>
                    <th>Tên SP</th>
                    <th>Giá </th>
                    <th>Hình ảnh</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tblDanhSachSanPham">

            </tbody>
        </table>
    </div>
    `;
    getEle("root").innerHTML = content;
};


const renderListProduct = () => {
    // getListProduct()
    callApi(`SanPham`, "GET", null)
        .then((result) => {
            let content = "";
            result.data.forEach((product) => {
                content += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.tenSP}</td>
                    <td>${product.gia}</td>
                    <td><img src="${product.hinhAnh}" width="50"/></td>
                    <td>
                        <button class="btn btn-info" onclick="editProduct(${product.id})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button></button>
                    </td>
                </tr>
                `;
            });
            getEle("tblDanhSachSanPham").innerHTML = content;
        })
        .catch((err) => {
            console.log(err);
        });
};

renderHTML();
renderListProduct();

// delete product
window.deleteProduct = deleteProduct;

function deleteProduct(id) {
    // deleteProductApi(id)
    callApi(`SanPham/${id}`, "DELETE", null)
        .then((result) => {
            alert("da xoa");
            renderListProduct();
        })
        .catch((err) => {
            console.log(err);

        })
}

// add product
getEle("btnThem").addEventListener("click", function() {
    // lay thong tin
    const tenSP = getEle("tenSP").value;
    const gia = getEle("gia").value;
    const hinhAnh = getEle("hinhAnh").value;

    //khởi tạo đối lương productt từ lớp đối tượng
    const product = new Product("", tenSP, gia, hinhAnh);

    addProductApi(product)
        .then((result) => {
            alert("add xong");
            renderListProduct();
        })
        .catch((err) => {
            console.log(err);
        })
})

// edit product 
window.editProduct = editProduct;

function editProduct(id) {
    getProductById(id)
        .then((result) => {
            console.log(result.data);
            // get data
            getEle("maSP").value = result.data.id;
            getEle("tenSP").value = result.data.tenSP;
            getEle("gia").value = result.data.gia;
            getEle("hinhAnh").value = result.data.hinhAnh;
        })
        .catch((err) => {
            console.log(err);
        })
}

//update product
// window.updateProductbyId = updateProductbyId;
getEle("btnCapNhat").addEventListener("click", function() {
    // lay thong tin
    const id = getEle("maSP").value;
    const tenSP = getEle("tenSP").value;
    const gia = getEle("gia").value;
    const hinhAnh = getEle("hinhAnh").value;

    //khởi tạo đối tương product từ lớp đối tượng
    const product = new Product(id, tenSP, gia, hinhAnh);

    updateProductbyId(product)
        .then((result) => {
            alert("da cap nhat");
            renderListProduct();
        })
        .catch((err) => {
            console.log(err)
        })

})