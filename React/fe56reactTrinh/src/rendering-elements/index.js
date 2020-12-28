import React, { Component } from 'react'

export default class RenderingElements extends Component {
    name = "Trinh";
    age = 28;

    renderInfo = ()=>{
        return (
        <p>Username: {this.name} - Age: {this.age}</p>
        )
    }
    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {/* <p>Username: {this.name}</p>
                <p>Age: {this.age}</p> */}
                {this.renderInfo()}
            </div>
        )
    }
}
