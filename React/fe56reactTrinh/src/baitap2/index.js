// componet stateless
import React from 'react';
import Header from "./header";
import Carousel from "./carousel";
import Contact from "./contact";
import WhatWedo from "./what-we-do";
import ListCard from "./list-card";
import Footer from "./footer";

function Baitap2(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <div className="row">
                    <WhatWedo/>
                    <Contact/>
                </div>
            </div>
            <ListCard/>
            <Footer/>
        </div>
    )
}
export default Baitap2;