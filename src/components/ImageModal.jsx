import React from "react";
import "../CSS/ImageModal.css";

const ImageModal = ({ imageUrl, onClose }) => {
   return (
      <div className="image-modal-overlay" onClick={onClose}>
         <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
         >
            <span className="close-button" onClick={onClose}>
               &times;
            </span>
            <img src={imageUrl} alt="Full Screen" />
         </div>
      </div>
   );
};

export default ImageModal;
