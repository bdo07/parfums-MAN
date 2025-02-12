import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import "./Panier.css";

const Panier = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // حساب المجموع الكلي
  const totalAmount = cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate("/checkout");  // يوجه المستخدم إلى صفحة الدفع
  };

  return (
    <div className="panier-container">
      <h1 className="panier-title">🛒 Mon Panier</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <div className="cart-items">
          
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-section">
                <span className="cart-item-title">Produit</span>
                <div className="cart-item-details">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <span>{item.title}</span>
                </div>
              </div>

              <div className="cart-item-section">
                <span className="cart-item-title">Prix</span>
                <span className="cart-item-price">{item.prix} MAD</span>
              </div>

              <div className="cart-item-section">
                <span className="cart-item-title">Quantité</span>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
              </div>

              <div className="cart-item-section">
                <span className="cart-item-title">Action</span>
                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="total-amount">
            <h3>Total: {totalAmount} MAD</h3>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Passer la commande
          </button>
        </div>
      )}
    </div>
  );
};

export default Panier;
