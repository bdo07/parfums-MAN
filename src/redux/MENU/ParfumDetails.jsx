import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"; // إضافة useNavigate
import { addToCart } from "./cartSlice.jsx"; // استيراد الإجراء المناسب لإضافة المنتجات للسلة
import "./ParfumDetails.css";

const ParfumDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // استخدام التنقل

  const { womenn, men } = useSelector((state) => state.tousproduct);
  const product = womenn?.find((item) => item.id === parseInt(id)) || men?.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>🚨 Produit non trouvé 🚨</h2>;
  }

  // جلب عطور مشابهة
  const relatedProducts = (womenn.includes(product) ? womenn : men)
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  // دالة لإضافة المنتج إلى السلة والانتقال لصفحة Panier
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // إرسال المنتج إلى `cartSlice`
    navigate("/panier"); // الانتقال إلى صفحة Panier
  };

  return (
    <div className="parfum-details-container">
      <div className="parfum-details-box">
        <div className="parfum-image-box">
          <img src={product.image} alt={product.title} className="parfum-product-image" />
        </div>

        <div className="parfum-info-box">
          <h1 className="parfum-title">{product.title}</h1>
          <p className="parfum-description">{product.description}</p>
          <p className="parfum-price">Prix: <span>{product.prix} MAD</span></p>
          <button className="parfum-buy-button" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>

      <div className="parfum-related-products">
        <h2>Autres parfums</h2>
        <div className="parfum-products-list">
          {relatedProducts.map((item) => (
            <div key={item.id} className="parfum-product-card">
              <img src={item.image} alt={item.title} className="parfum-related-image" />
              <h3>{item.title}</h3>
              <p className="parfum-related-price">{item.prix} MAD</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParfumDetails;
