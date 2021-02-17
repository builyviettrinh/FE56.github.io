import React, { Component } from "react";
import Movie from "./../../../components/Movie";
import Loader from "./../../../components/Loader";
import { actListMovieApi } from "./modules/action";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }

  renderHTML = () => {
    const { loading, data } = this.props;

    if (loading) return <Loader />;
    return (
      data &&
      data.map((item) => {
        return <Movie key={item.maPhim} movie={item} />;
      })
    );
  };

  render() {
    return (
      <div className="container">
        <h3>ListMoviePage</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMoviceReducer.loading,
    data: state.listMoviceReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
