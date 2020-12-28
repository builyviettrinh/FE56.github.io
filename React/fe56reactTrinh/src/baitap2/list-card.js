import React from "react";
import ItemCard from "./item-card";

export default function ListCard(){
    return(
        <div>
             <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    <ItemCard/>
                    </div>
                    <div className="col-sm-4">
                    <ItemCard/>
                    </div>
                    <div className="col-sm-4">
                    <ItemCard/>
                    </div>
                </div>
             </div>


        </div>

    )
}
