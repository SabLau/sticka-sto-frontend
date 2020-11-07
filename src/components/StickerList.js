import React from 'react';
import Sticker from './Sticker.js';
import PropTypes from 'prop-types';

// 08202020 YJ: Since we are not doing anything with the state,
// I think we don't need to use a class.

// class StickerList extends Component {
//   render() {
//     console.log(this.props.stickers);
//
//     return this.props.stickers.map((sticker, index) => (
//       <Sticker className="item" key={index} sticker={sticker} />
//     ));
//   }
// }

const StickerList = ({ stickers }) => (
  stickers.map((sticker, index) => (
  <Sticker className="item" key={index} sticker={sticker} />
)))


// requires to have a non empty array
StickerList.propTypes = {
  stickers: PropTypes.array.isRequired,
};
export default StickerList;
