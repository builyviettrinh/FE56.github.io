import React, { Component } from "react";

class OneChild extends Component {
  handleClick = () => {
    //   sửa cấu nói của hero
    this.props.handleChangeSayings("20 gg");
  };

  render() {
    const { hero } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={hero.image} alt />
          <div className="card-body">
            <h4 className="card-title">{hero.name}</h4>
            <p className="card-text">{hero.sayings}</p>
            <button className="btn btn-info" onClick={this.handleClick}>
              sửa câu nói
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OneChild;
