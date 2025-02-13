import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Promotion.css";

const Promotion = () => {
  const navigate = useNavigate();
  const womenPerfumes = useSelector((state) => state.tousproduct.womenn);
  const menPerfumes = useSelector((state) => state.tousproduct.men);

  const selectedWomenPerfumes = womenPerfumes.slice(4, 8);
  const selectedMenPerfumes = menPerfumes.slice(4, 8);

  return (
    <div className="promotion-container">
      {/* صورة الترويج */}
      <div className="promotion-image-box">
        <img src="/Promotion/promotion1.png" alt="Promotion" className="promotion-image" />
      </div>


      <h2 className="category-title">Parfums pour Femmes</h2>
      <div className="perfume-grid">
        {selectedWomenPerfumes.map((perfume) => (
          <div key={perfume.id} className="perfume-card">
            <img
              src={perfume.image}
              alt={perfume.title}
              className="perfume-image"
              onClick={() => navigate(`/parfum/${perfume.id}`)}
            />
            <h3>{perfume.title}</h3>
            <p className="perfume-price">{perfume.prix} MAD</p>
          </div>
        ))}
      </div>

      <h2 className="category-title">Parfums pour Hommes</h2>
      <div className="perfume-grid">
        {selectedMenPerfumes.map((perfume) => (
          <div key={perfume.id} className="perfume-card">
            <img
              src={perfume.image}
              alt={perfume.title}
              className="perfume-image"
              onClick={() => navigate(`/parfum/${perfume.id}`)}
            />
            <h3>{perfume.title}</h3>
            <p className="perfume-price">{perfume.prix} MAD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
