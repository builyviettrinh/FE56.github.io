import React, { Component } from "react";

// nhận lại props và binding ra jsx {}
class ProDetail extends Component {
  render() {
    const { productSelected } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={productSelected.hinhAnh} alt />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>AMOLED, 6.2", Full HD+</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>Android 9.0 (Pie)</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>20 MP</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>Chính 48 MP &amp; Phụ 8 MP, 5 MP</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>4 GB</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>6 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProDetail;
