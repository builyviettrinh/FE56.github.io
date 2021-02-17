import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearch } from "./modules/action";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={(e) => {
          this.props.getKeyword(e.target.value);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actSearch(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
