import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP",
        },
        {
          id: 2,
          name: "hao",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP",
        },
      ],
      userEdit: null,
      keyword: "",
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((item) => {
      return item.id === id;
    });
  };

  handleDeleteUser = (id) => {
    const userList = [...this.state.userList];
    const index = this._findIndex(id);
    if (index !== -1) {
      userList.splice(index, 1);

      this.setState({
        userList,
      });
    }
  };

  handleOnSubmit = (user) => {
    let userList = [...this.state.userList];
    if (user.id) {
      //Update
      const index = this._findIndex(user.id);
      if (index !== -1) {
        userList[index] = user;
        this.setState({
          userList: userList,
          userEdit: user,
        });
      }
    } else {
      //Add
      const newUser = { ...user, id: Math.random() };
      userList = [...this.state.userList, newUser];
      this.setState({
        userList: userList,
      });
    }
  };

  handleGetUserEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    });
  };

  render() {
    let { keyword } = this.state;
    let userList = [...this.state.userList];
    userList = userList.filter((user) => {
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          deleteUser={this.handleDeleteUser}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal onSubmit={this.handleOnSubmit} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
