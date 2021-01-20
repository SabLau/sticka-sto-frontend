import React from 'react';
import './css/App.css';
import Header from './components/Header.js';
import AdminHome from './pages/AdminHome.js';
import AddSticker from './components/AddSticker.js';
import AdminLoginPage from './pages/AdminLoginPage.js';
import UserSignUpPage from './pages/UserSignUpPage.js';
import Cart from './components/Cart.js';
import CartItem from './components/CartItem.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={AdminHome} />
        <Route path="/add_sticker" component={AddSticker} />
        <Route path="/maplestoryLogin" component={AdminLoginPage} />
        <Route path="/signUp" component={UserSignUpPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/cart-item" component={CartItem} />
      </Switch>
    </div>
  );
}

export default App;
