import React, { useState } from 'react';
import PropTypes from 'prop-types';
import editIcon from '../imgs/edit-icon.png';
import '../css/index.css';
import './css/Sticker.css';
import EditModal from '../components/EditModal';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BACKEND_SERVER = 'https://sticka-sto-backend.herokuapp.com/';

function Sticker (props){
  //user state
    const isAdmin = useSelector(state => state.isAdmin)
    console.log(isAdmin);
    //hooks
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [img, setImg] = useState('');
    const [stickerDescription, setStickerDescription] = useState('');
    const [isShowing, setIsShowing] = useState(false);
    const [stickerData, setStickerData] = useState([]);


    const showEditModal = () => {
        setIsShowing(true);
        getStickerInfo();
    };

    const hideEditModal = () => {
        setIsShowing(false);
    };

    const getStickerInfo = async () => {
        const res = await axios.get(
        BACKEND_SERVER + `stickers/${props.sticker.sticker_id}`
        );
        const data = res.data;

        // console.log('data: ', data.Sticker);
        //console.log('data', data.Sticker);


        setId(data.Sticker.sticker_id);
        setImg(data.Sticker.img);
        setQuantity(data.Sticker.quantity);
        setName(data.Sticker.sticker_name);
        setPrice(data.Sticker.sticker_price);
        setStickerDescription(data.Sticker.sticker_description);
        setStickerData(data.Sticker);
        
    };

    const updateSticker = () => {
        let updateStickerParams = {
            sticker_id: id,
            sticker_name: name,
            img: img,
            price: price,
            quantity: quantity,
            sticker_description: stickerDescription,
        };
        //console.log(updateStickerParams)
        // call to update stickers
        axios.put(BACKEND_SERVER + 'stickers_update', updateStickerParams);
        // axios.put(BACKEND_SERVER + 'inventory_update', updateStickerParams);
        // this.props.fetchStickers;

            setId('');
            setName('');
            setPrice('');
            setQuantity('');
            setImg('');
            setStickerDescription('');
            setIsShowing(false);
            setStickerData([]);
            window.location.reload(false);
        
    };
    console.log(props);
    return (
        <div className="sticker">
            <div className="img-container">
            <img className="img-style" src={props.sticker.img} alt={props.sticker.sticker_name} />
            </div>
            {
            isAdmin ? (
              <button className="edit-btn" onClick={showEditModal}>
                <img className="edit-icon" src={editIcon} alt={editIcon} />
              </button>
            ) : null
            }
            {
            // passing in the whole state
            isShowing ? (
                <EditModal
                  setName={setName}
                  setPrice={setPrice}
                  setQuantity={setQuantity}
                  setStickerDescription={setStickerDescription}
                  hideEditModal={hideEditModal}
                  stickerData={stickerData}
                  isShowing={isShowing}
                  updateSticker={updateSticker}
                />
            ) : null
            }

            <div className="sticker-info">
            <p>Name: {props.sticker.sticker_name}</p>
            <p> Price: ${props.sticker.sticker_price}</p>
            <p>{props.sticker.sticker_description}</p>
            {isAdmin ? (
              <p> Qty: {props.sticker.quantity}</p>
              ) : null
            }
            </div>
        </div>
    );   
}
// requires the item to exist
Sticker.propTypes = {
  sticker: PropTypes.object.isRequired,
};

export default Sticker;
