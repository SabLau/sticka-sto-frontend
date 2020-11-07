import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/EditModal.css';

const EditModal = ({
  setName,
  setPrice,
  setQuantity,
  setStickerDescription,
  updateSticker,
  hideEditModal,
  isShowing,
  stickerData,
}) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isShowing}
      onHide={hideEditModal}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="category">
          <span>Sticker ID: {stickerData.sticker_id} </span>
        </div>

        <div className="category">
          {/*TODO: change to file upload*/}
          {/*<span>Image URL: </span>
          <input
            name="img_url"
            onChange={onChange}
            placeholder={stickerData.img_url}
          />*/}
          
        </div>

        <div className="category">
          <span>Name: </span>
          <input
            name="name"
            onChange={e=>setName(e.target.value)}
            placeholder={stickerData.sticker_name}
          />
        </div>

        <div className="category">
          <span>price: </span>
          <input
            name="price"
            onChange={e=>setPrice(e.target.value)}
            placeholder={stickerData.sticker_price}
          />
        </div>

        <div className="category">
          <span>Quantity: </span>
          <input
            name="quantity"
            onChange={e=>setQuantity(e.target.value)}
            placeholder={stickerData.quantity}
          />
        </div>

        <div className="category">
          <span>Sticker Description: </span>
          <input
            type="text"
            name="stickerDescription"
            onChange={e=>setStickerDescription(e.target.value)}
            placeholder={stickerData.sticker_description}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer">
        <Button className="textColor bgColor" onClick={updateSticker}>
          Save
        </Button>
        <Button className="textColor bgColor" onClick={hideEditModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// const EditModal = () => (
//     <Modal
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       show={isShowing} // shows Modal
//       onHide={hide} // hides Modal, allows user to click outside of the Modal and hide it
//     >
//       <Modal.Header>
//         <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <div className="category">
//           <span>Name: </span>
//           <input />
//         </div>

//         <div className="category">
//           <span>Quantity:</span>
//           <input />
//         </div>

//         <div className="category">
//           <span>Description: </span>
//           <input />
//         </div>

//         <div className="category">
//           <span>Image URL: </span>
//           <input />
//         </div>

//         <div className="category">
//           <span>price: </span>
//           <input />
//         </div>
//       </Modal.Body>

//       <Modal.Footer className="modal-footer">
//         <Button className="textColor bgColor" onClick={hide}>
//           Save
//         </Button>
//         <Button className="textColor bgColor" onClick={hide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
// );

export default EditModal;
