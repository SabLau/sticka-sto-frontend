import React, { useState, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import editIcon from '../imgs/edit-icon.png';
import '../css/index.css';
import './css/Sticker.css';
import CartItem from './CartItem.js';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { resetCartItems } from '../actions/index.js';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

function Cart () {
    const reduxCart = useSelector(state=>state.cart);
    const dispatch = useDispatch();


    useEffect(() => fetchStickers());
    const resetCart = () => {
        dispatch(resetCartItems);
    }
    const [cart, setCart] = useState('');
    const fetchStickers = async () =>{
        //grab stickers of based on id from redux store
        const res = [];
        for( let i = 0; i < reduxCart.length; i++){
            res.push_back(axios.get(BACKEND_SERVER + `/stickers/${reduxCart[i].id}`))
        }
        //
        //setCart(res);
    }

    return (
        <div className="container">
            <section className="cart-inventory">
                <h5 className="cart-items">Shopping Cart</h5>
                <section className="sticker">
                    <img src="#" alt="#"/>
                    <h5>Name of Sticker</h5>
                    <p>Qty</p>
                </section>
                <CartItem cart={reduxCart}/>
            </section>
            <aside className="cart-summary">
                <h5 className="cat-subtotal">
                    Subtotal (# items): stickerprice
                </h5>
                <button className="checkout-btn">checkout</button>
                <button onClick={resetCart}>reset cart</button>
                
                {/*console.log(cart)*/}
            </aside>
        </div>
    );
} export default Cart;
