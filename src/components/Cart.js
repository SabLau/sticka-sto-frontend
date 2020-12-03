import React, { useState } from 'react';
import PropTypes from 'prop-types';
import editIcon from '../imgs/edit-icon.png';
import '../css/index.css';
import './css/Sticker.css';
import EditModal from '../components/EditModal';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItems, removeCartItems, updateCartItems, resetCartItems } from '../actions/index.js';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

function Cart (){

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    var removeID = 11
    var stickerID = 11
    var stickerQty = 2
    var stickerUpdate = 11
    const addToCart = () => {
        dispatch(
            addCartItems (
                stickerID,
                stickerQty
            )
        );
    }

    const removeFromCart = () => {
         dispatch(
            removeCartItems (removeID)
        ); 
    }

    const updateItemQty = () => {
         dispatch(
            updateCartItems(
                stickerID,
                stickerUpdate
            )
        );
    }
    const resetCart = () => {
        dispatch(
            resetCartItems()
        );
    }

return (
    <div className="container">
        <div>
            <h1>testing adding inventory</h1>
            <button onClick={addToCart}>Add Item</button>
        </div>

        <section className="cart-inventory">
            <h5 className="cart-items">Shopping Cart</h5>
            <section className="sticker">
                <img src="#" alt="#"/>
                <h5>Name of Sticker</h5>
                <p>Qty</p>
                <button className="remove-item-btn" onClick={removeFromCart}>remove</button>
            </section>
        </section>
        <aside className="cart-summary">
            <h5 className="cat-subtotal">
                Subtotal (# items): stickerprice
            </h5>
            <button className="checkout-btn">checkout</button>
            <button onClick={resetCart}>reset cart</button>
            
            {console.log(cart)}
        </aside>
    </div>
);

} export default Cart;