import React, { Component } from "react";

class Modal extends Component {
  renderCartList = () => {
    const { cartList, handleChangeAmount, handleDeleteCart } = this.props;
    return cartList.map((cart, index) => {
      return (
        <tr className="card-item" key={index}>
          <td>{cart.maSP}</td>
          <td>{cart.tenSP}</td>
          <td>
            <img src={cart.hinhAnh} width={50} alt />
          </td>
          <td>
            <button
              onClick={() => {
                handleChangeAmount(false, cart);
              }}
            >
              -
            </button>
            {cart.soLuong}
            <button
              onClick={() => {
                handleChangeAmount(true, cart);
              }}
            >
              +
            </button>
          </td>
          <td>{cart.giaBan}</td>
          <td>{cart.soLuong * cart.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeleteCart(cart);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        aria-labelledby="modelTitleId"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartList()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
