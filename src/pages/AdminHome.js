import React, { Component } from 'react';
import './css/AdminHome.css';
import StickerList from '../components/StickerList.js';
import axios from 'axios';
import { useSelector } from 'react-redux';


const BACKEND_SERVER = 'http://127.0.0.1:5000/';

class AdminHome extends Component {
  constructor() {
    super();
    this.state = {
      stickers: [],
    };
  }

  //pull stickers from /sticker_all endpoint
  componentDidMount() {
    this.fetchStickers();
  }

  fetchStickers = async () => {
    const res = await axios.get(BACKEND_SERVER + 'sticker_all');
    this.setState({ stickers: res.data.Sticker_list });

    /* YJ: for checking purposes */
    // await axios.get(BACKEND_SERVER + 'sticker_all').then(res => console.log(res.data))
  };

  render() {
    return (
      <div className="App">
        <div className="list-container">
          <div className="list">
            <StickerList stickers={this.state.stickers} />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminHome;
