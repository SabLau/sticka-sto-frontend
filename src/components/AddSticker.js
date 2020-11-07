import React, { Component } from 'react';
import axios from 'axios';
import '../css/index.css';
import './css/AddSticker.css';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: null,
      qty: '',
      price: '',
      stickerDescription: ''
    };
  }

  // state change as inputs in form change
  imgChange = (event) => {
    let reader = new FileReader();
    reader.onload = () => {
      this.setState({
        img: reader.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // state change as inputs in form change
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // submitting needs to push state up in order to add new item to InventoryList, set state back to no values
  onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.img);
    let createStickerParams = {
      name: this.state.name,
      img: this.state.img,
      price: this.state.price,
      sticker_description: this.state.stickerDescription,
      quantity: this.state.qty,
    };
    //create new sticker info
    axios
      .post(BACKEND_SERVER + 'create_sticker', createStickerParams)
      .then((result) => {
        console.log(result);
      });

    this.setState({
      name: '',
      price: '',
      stickerDescription: '',
      img: null,
      qty: '',
    });
  };
  render() {
    return (
      <div>
        <div className="form-container">
          <form enctype="multipart/form-data">
            <input name="img" type="file" onChange={this.imgChange} />
            <input
              type="text"
              name="name"
              placeholder="Name of Sticker"
              value={this.state.name}
              onChange={this.onChange}
            ></input>
            <input
              type="number"
              name="price"
              min="0.00"
              step="0.01"
              max="2500"
              placeholder="Price"
              value={this.state.price}
              onChange={this.onChange}
            ></input>
            <input
              type="number"
              name="qty"
              min="0"
              step="1"
              max="2500"
              placeholder="Quantity"
              value={this.state.qty}
              onChange={this.onChange}
            ></input>
            <input
              type="text"
              name="stickerDescription"
              placeholder="Sticker Description..."
              value={this.state.stickerDescription}
              onChange={this.onChange}
            ></input>
            <input
              type="submit"
              value="Submit"
              className="submit-btn"
              onClick={this.onSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
