import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // تأكد من أنك تستخدم هذا الاستيراد بشكل صحيح
import "./ParfumFemme.css";

const ParfumFemme = () => {
  const { womenn } = useSelector((state) => state.tousproduct); // جلب المنتجات من الـ Redux
  const [hoveredImage, setHoveredImage] = useState(null); // حالة الصورة عند التمرير
  const navigate = useNavigate(); // لاستخدام التوجيه إلى الصفحة الأخرى

  

  return (
    <div>
      <h1>Parfums Femme</h1>
      <div className="grid-container">
        {womenn?.length > 0 ? (
          womenn.map((product) => (
            <div key={product.id} className="product-card">
              <img
                // تغيير الصورة عند التمرير
                src={hoveredImage === product.id ? product.imageHover : product.image}
                alt={product.title}
                className="product-image"
                onMouseEnter={() => setHoveredImage(product.id)} // تعيين الصورة المعلق عليها
                onMouseLeave={() => setHoveredImage(null)} // العودة للصورة الأصلية
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
          <p>Aucun produit disponible.</p> // عرض رسالة إذا لم تكن هناك منتجات
        )}
      </div>
    </div>
  );
};

export default ParfumFemme;
