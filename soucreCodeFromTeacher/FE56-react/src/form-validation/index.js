import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      isValid: false,
      manvValid: false,
      tenvValid: false,
      emailValid: false,
    };
  }

  handleOnchange = (e) => {
    let { name, value } = e.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleErrors = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    let mess = value === "" ? name + " khong duoc rong" : "";
    let { manvValid, tenvValid, emailValid } = this.state;

    switch (name) {
      case "manv":
        manvValid = mess === "" ? true : false;
        if (value && value.length < 4) {
          mess = "Độ dài ký tự từ 4 trở lên";
          manvValid = false;
        }
        break;
      case "tennv":
        tenvValid = mess === "" ? true : false;
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          mess = "Email k dung dinh dang";
          emailValid = false;
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tenvValid,
        emailValid,
      },
      () => {
        this.formValidation();
      }
    );
  };

  formValidation = () => {
    let { manvValid, tenvValid, emailValid } = this.state;
    this.setState({
      isValid: manvValid && tenvValid && emailValid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValid) {
      console.log("Thực thi chức năng khi bấm submit");
    } else {
      alert("abc");
    }
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Mã nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.manv ? (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.tennv ? (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
              onKeyUp={this.handleErrors}
            />
            {this.state.errors.email ? (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.isValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
