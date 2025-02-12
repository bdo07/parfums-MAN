import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import "./ParfumFemme.css";

const ParfumFemme = () => {
  const { womenn } = useSelector((state) => state.tousproduct); 
  const [hoveredImage, setHoveredImage] = useState(null); 
  const navigate = useNavigate(); 
  

  return (
    <div>
      <h1>Parfums Femme</h1>
      <div className="grid-container">
        {womenn?.length > 0 ? (
          womenn.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={hoveredImage === product.id ? product.imageHover : product.image}
                alt={product.title}
                className="product-image"
                onMouseEnter={() => setHoveredImage(product.id)} 
                onMouseLeave={() => setHoveredImage(null)} 
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">{product.prix} MAD</p>
              <button
                className="buy-button"
                            onClick={() => navigate(`/parfum/${product.id}`)}
              >
                Acheter
              </button>
            </div>
          ))
        ) : (
          <p>Aucun produit disponible.</p> 
        )}
      </div>
    </div>
  );
};

export default ParfumFemme;
