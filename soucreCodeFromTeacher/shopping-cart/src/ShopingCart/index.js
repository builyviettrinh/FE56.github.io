import React, { Component } from "react";
import Modal from "./Modal";
import ProDetail from "./ProDetail";
import ProList from "./ProList";

class ShopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          manHinh: 'AMOLED, 6.2", Full HD+',
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
        },

        {
          maSP: 2,
          tenSP: "Meizu 16Xs",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: "./img/meizuphone.jpg",
        },

        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: "./img/applephone.jpg",
        },
      ],
      productSelected: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
      },
      cartList: [],
    };
  }

  handleDeleteCart = (product) => {
    const { cartList } = this.state;
    const newCartList = cartList.filter((cart) => {
      return product.maSP !== cart.maSP;
    });
    this.setState({
      cartList: newCartList,
    });
  };

  handleChangeAmount = (status, product) => {
    let { cartList } = this.state;
    const index = cartList.findIndex((cart) => {
      return cart.maSP === product.maSP;
    });
    if (index !== -1) {
      if (status) {
        // cộng
        cartList[index].soLuong += 1;
      } else {
        // trừ
        if (cartList[index].soLuong > 1) {
          cartList[index].soLuong -= 1;
        } else {
          alert("không được giảm nửa");
        }
      }
      this.setState({
        cartList,
      });
    }
  };

  handleAddCart = (product) => {
    let { cartList } = this.state;
    const index = cartList.findIndex((cart) => {
      return cart.maSP === product.maSP;
    });
    if (index !== -1) {
      // tìm thấy
      cartList[index].soLuong += 1;
    } else {
      // không tìm thấy
      const newProduct = { ...product, soLuong: 1 };
      cartList = [...cartList, newProduct];
    }
    this.setState({
      // cartList : cartList,
      cartList,
    });
  };

  handleDetail = (productSelected) => {
    this.setState({
      // productSelected : productSelected,
      productSelected,
    });
  };

  handleSumCart = () => {
    const sumCart = this.state.cartList.reduce((tong, cart) => {
      tong += cart.soLuong;
      return tong;
    }, 0);
    return sumCart;
  };

  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.handleSumCart()})
          </button>
        </div>
        <ProList
          handleAddCart={this.handleAddCart}
          handleDetail={this.handleDetail}
          productList={this.state.productList}
        />
        <Modal
          cartList={this.state.cartList}
          handleChangeAmount={this.handleChangeAmount}
          handleDeleteCart={this.handleDeleteCart}
        />
        <ProDetail productSelected={this.state.productSelected} />
      </section>
    );
  }
}

export default ShopingCart;
