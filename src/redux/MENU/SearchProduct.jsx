import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // تأكد من أنك تستخدم هذا الاستيراد بشكل صحيح
import './SearchProduct.css';

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredImages, setHoveredImages] = useState({}); // تخزين الصورة الحالية لكل عطر

  const womenPerfumes = useSelector((state) => state.tousproduct.womenn);
  const menPerfumes = useSelector((state) => state.tousproduct.men);

  const allPerfumes = [...womenPerfumes, ...menPerfumes];

  const filteredPerfumes = allPerfumes.filter((perfume) =>
    perfume.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perfume.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate(); // لاستخدام التوجيه إلى الصفحة الأخرى

  return (
    <div className="container">
      <h1 className="title">Search Perfume</h1>
      <input
        type="text"
        placeholder="Search for a perfume..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="perfume-grid">
        {filteredPerfumes.length > 0 ? (
          filteredPerfumes.map((perfume) => (
            <div key={perfume.id} className="perfume-card">
              <img
                src={hoveredImages[perfume.id] || perfume.image} // عرض الصورة الافتراضية أو الصورة المتغيرة
                alt={perfume.title}
                className="perfume-image"
                style={{
                  width: "115px",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "20px",
                  transition: "0.3s ease-in-out"
                }}
                onMouseOver={() => setHoveredImages(prev => ({
                  ...prev,
                  [perfume.id]: perfume.imageHover // تغيير الصورة عند تمرير الماوس
                }))}
                onMouseOut={() => setHoveredImages(prev => ({
                  ...prev,
                  [perfume.id]: perfume.image // إعادة الصورة الأصلية
                }))}
              />
              <h3>{perfume.title}</h3>
              <p>{perfume.description}</p>
              <span className="perfume-price">{perfume.prix} MAD</span>
              
              <button
                className="buy-button"
                onClick={() => navigate(`/parfum/${perfume.id}`)} // استخدام perfume.id بدلاً من product.id
              >
                Acheter
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
