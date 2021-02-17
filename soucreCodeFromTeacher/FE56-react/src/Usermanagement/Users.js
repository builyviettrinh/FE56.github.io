import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderTable = () => {
    return this.props.userList.map((item) => {
      return (
        <UserItem
          key={item.id}
          user={item}
          deleteUser={this.props.deleteUser}
          getUserEdit={this.props.getUserEdit}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
