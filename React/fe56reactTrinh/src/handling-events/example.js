import React, { Component } from 'react'

export default class ExampleEvent extends Component {
    isLogin = false; // login 
    // renderHTML = ()=>{
    //     if(this.isLogin){
    //         return(
    //             <>
    //                 <h1>Hello Trinh</h1>
    //             </>
    //         )
    //     }
    //     else{
    //         return(
    //             <>
    //                 <button className="btn btn-success">Login</button>
    //             </>
    //         )
    //     }
    // }

    handleLogin = ()=>{
        console.log(this.isLogin);
        this.isLogin = true;
        console.log(this.isLogin);
    }
    renderHTML = () =>{
        // DK ? "Dung" : "sai"
       return this.isLogin ? (<h1>Hello Trinh</h1>
        ) : (
        <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
        );
    }
    render() {
        return (
            <div>
                <h3>*ExampleEvent</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
