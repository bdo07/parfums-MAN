import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";  
import './productList.css';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const { women, men } = useSelector((state) => state.products);
  const navigate = useNavigate(); 

  const handleShowWomen = () => {
    navigate('/parfum-femme');  
  };

  const handleShowMen = () => {
    navigate('/parfum-homme');
  };

  return (
    <div>
      <h1>Parfums femme</h1>
      <div className="images-container">
  <div className="image-item left">
    <img src="/public/backg/ft.jpg" alt="men" />
    <button className="af" onClick={handleShowMen}>Men</button>
  </div>
  
  <div className="image-item right">
    <img src="/public/backg/rt.jpg" alt="women" />
    <button className="af" onClick={handleShowWomen}>Femme</button>

  </div>
</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",  
          gap: "20px",  
        }}
      >
        {women.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image} 
              alt={product.title}
              style={{
                width: "115px",
                height: "200px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>{product.prix} MAD</p>
            <button className="buy-button"
            
           onClick={() => navigate(`/parfum/${product.id}`)}
            >

                   
              Acheter
            </button>
          </div>
        ))}
      </div>

      <div className="container">
        <button className="af" onClick={handleShowWomen}>TOUS AFFICHER FEMME</button>
      </div>

      <h1>Parfums homme</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "20px",  
        }}
      >
        {men.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image} 
              alt={product.title}
              style={{
                width: "115px",
                height: "200px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>{product.prix} MAD</p>
            <button className="buy-button"
             
              onClick={() => navigate(`/parfum/${product.id}`)}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>

      <div className="container">
        <button className="af" onClick={handleShowMen}>TOUS AFFICHER HOMME</button>
      </div>
    </div>
  );
};

export default ProductList;
