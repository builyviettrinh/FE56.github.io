import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "./modules/action";

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * key: value
     *  key - tên props ngay tại component đang sử dụng
     */
    deleteUser: (id) => {
      dispatch(actDeleteUser(id));
    },

    editUser: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
