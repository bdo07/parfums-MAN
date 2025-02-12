import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    address: "",
  });


  const [showPopup, setShowPopup] = useState(false);  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = () => {
    setShowPopup(true);  
  };

  const handleCreateAccount = (createAccount) => {
    if (createAccount) {
     
      navigate("/account");

     
    }else{
      
      navigate('/');
    }
   
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);

  return (
    <div className="checkout-container">
      
      <div className="selected-items">
        {cartItems.map((item) => (
          <div key={item.id} className="selected-item">
            <img src={item.image} alt={item.title} className="selected-item-image" />
            <div className="selected-item-details">
              <span className="selected-item-title">{item.title}</span>
              <span className="selected-item-price">{item.quantity} x {item.prix} MAD</span>
            </div>
          </div>
        ))}
        <div className="total-price">
          <strong>Total:</strong> {totalPrice} MAD
        </div>
      </div>

      <div className="checkout-form">

        <label>Nom:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Telephone:</label>
        <input type="number" name="telephone" value={formData.telephone} onChange={handleChange} required />

        <label>Adresse:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <button className="confirm-button" onClick={handleConfirmOrder}>Confirmer la commande</button>
      </div>


     



      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Merci pour l'achat😍,
            Souhaitez-vous créer votre compte pour 
            recevoir toutes les nouvelles mises à jour ?
            </h2>
            <button onClick={() => handleCreateAccount(true)}>Oui</button>
            <button onClick={() => handleCreateAccount(false)}>Non</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;




