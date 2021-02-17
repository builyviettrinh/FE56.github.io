import React, { Component } from "react";
import Pro from "./Pro";

class ProList extends Component {
  renderProList = () => {
    const { productList, handleDetail, handleAddCart } = this.props;
    return productList.map((pro, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Pro
            product={pro}
            handleDetail={handleDetail}
            handleAddCart={handleAddCart}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProList()}</div>
      </div>
    );
  }
}

export default ProList;
