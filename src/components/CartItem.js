import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

//this function returns each cart item
function CartItem(product) {
    

    return(
        <div className="row no-gutters py-2">
        <div className="col-sm-2 p-2">
            <img
            alt={product.name}
            style={{margin: "0 auto", maxHeight: "50px"}} 
            src='#' className="img-fluid d-block"/>
        </div>
        <div className="col-sm-4 p-2">
            <h5 className="mb-1">product name</h5>
            <p className="mb-1">Price: 10 </p>
            
        </div>
        <div className="col-sm-2 p-2 text-center ">
             <p className="mb-0">Qty: 10</p>
        </div>
        <div className="col-sm-4 p-2 text-right">
             <button 
             //onClick={() => increase(product)}
             className="btn btn-primary btn-sm mr-2 mb-1">
                <h1>+</h1>
             </button>

             {
                 3 > 1 &&
                 <button
                //onClick={() => decrease(product)}
                className="btn btn-danger btn-sm mb-1">
                    <h1>-</h1>
                </button>
             }

            {
                 1 === 1 &&
                 <button
                //onClick={() => removeProduct(product)}
                className="btn btn-danger btn-sm mb-1">
                    <h1>x</h1>
                </button>
             }
             
        </div>
    </div>
    );
}export default CartItem;