import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../utils/data";
import ImageModal from "./ImageModal"; // Import the ImageModal component
import "../CSS/SingleProduct.css";

const SingleProduct = () => {
   const { id } = useParams();
   const filtered = data.filter((item) => item.id === parseInt(id));
   const [selectedImage, setSelectedImage] = useState(null);

   const openImageModal = (imageUrl) => {
      setSelectedImage(imageUrl);
   };

   const closeImageModal = () => {
      setSelectedImage(null);
   };

   return (
      <div>
         {filtered?.map((item, key) => {
            return (
               <div key={key} className="singleProductContainer">
                  <div className="productInfo">
                     <h1 className="dot">{item.id + 1}</h1>
                     <h1>{item.name}</h1>
                     <p>{item.text}</p>
                     <br />
                     <br />
                  </div>

                  <div className="productImage">
                     <img
                        src={`/assets/${item.image}`}
                        alt=""
                        className="productImg"
                        onClick={() => openImageModal(`/assets/${item.image}`)}
                     />
                  </div>

                  <div className="gallery">
                     {item.images.map((photo, index) => (
                        <img
                           key={index}
                           src={`/assets/${photo}`}
                           alt=""
                           className="galleryImg"
                           onClick={() => openImageModal(`/assets/${photo}`)}
                        />
                     ))}
                  </div>
               </div>
            );
         })}

         {selectedImage && (
            <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />
         )}
      </div>
   );
};

export default SingleProduct;
