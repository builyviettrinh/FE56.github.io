import React, { Component } from 'react'

export default class State extends Component {

    constructor(props){
        super(props);
        this.state = {
            // key: value
            isLogin : false,
        };
        // this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = ()=>{
        // use ham setSate de thay doi gia tri cua state
        // ham setState bi bat dong bo
        this.setState({
            isLogin: true,
        });
    }

    // cach 2: viet bang function binh thuong se bao loo
    // handleLogin(){
    //     this.setState({
    //         isLogin: true,
    //     });
    // }
    renderHTML = () =>{
        // DK ? "Dung" : "sai"
       return this.state.isLogin ? (<h1>Hello Trinh</h1>
        ) : (
        <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
        );
    }
    render() {
        console.log("render"); // render chay nhieu lan khi state co su thay doi
        return (
            <div>
                <h3>*State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
