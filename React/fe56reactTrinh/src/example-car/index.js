import React, { Component } from 'react'

export default class ExampleCar extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg",
        };
    }

    handleColor = (imgUrl)=>{

        this.setState({
            img: imgUrl,
        })
    }

    render() {
        return (
            <div className="container">
                <h3>*ExampleCar</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={this.state.img} alt="a" />
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={()=>{this.handleColor("./img/imgRedCar.jpg")}}>Red</button>
                        <button className="btn btn-secondary mx-3" onClick={()=>{this.handleColor("./img/imgSilverCar.jpg")}}>Silver</button>
                        <button className="btn btn-dark" onClick={()=>{this.handleColor("./img/imgBlackCar.jpg")}}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
