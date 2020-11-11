import React, { useState } from 'react';
import PropTypes from 'prop-types';
import editIcon from '../imgs/edit-icon.png';
import '../css/index.css';
import './css/Sticker.css';
import EditModal from '../components/EditModal';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

function Cart (){


return (
    <div className="container">
        <section className="cart-inventory">
            <h5 className="cart-items">Shopping Cart</h5>
            <section className="sticker">
                <img src="#" alt="#"/>
                <h5>Name of Sticker</h5>
                <p>Qty</p>
                <button className="remove-item-btn">remove</button>
            </section>
        </section>
        <aside className="cart-summary">
            <h5 className="cat-subtotal">
                Subtotal (# items): stickerprice
            </h5>
            <button className="checkout-btn"></button>
        </aside>
    </div>
);

} export default Cart;