import React from 'react';
import addItemIcon from '../imgs/add-item-icon.png';
import './css/Header.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../actions'
import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap"

function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state=>state.isLogged.name)
  const id = useSelector(state=>state.isLogged.id)
  var isLogged=false;
  if(id!=null){
    isLogged=true;
  }
  const isAdmin = useSelector(state=>state.isAdmin)
  return (
    <header>
      <Link to="/">
        <h2 className="title">Sticka Sto</h2>
      </Link>
      
      {isAdmin ? (
      <Link to="/add_sticker">
        <div className="add-item-container">
          <button className="add-item-btn">
            <img
              className="add-item-icon"
              src={addItemIcon}
              alt={addItemIcon}
            />
          </button>
          
        </div>
      </Link>): null
      }
      {
        isLogged ? (
          <div>
            <p>Hello, {name}!</p>
            <button class="logout-btn" onClick={()=> dispatch(logout())}>Logout</button>
          </div>
        ) :
          <div>
            <p>Hello, Guest!</p>
            <button class="sign-up-btn"><Link to="/signUp">Sign Up!</Link></button>
            <button class="login-btn"><Link to="/maplestoryLogin">Login</Link></button>
          </div>
          
      }
      <div>
        <button class="cart-btn"><Link to="/cart">Cart</Link></button>
      </div>

    </header>
  );
}

export default Header;
