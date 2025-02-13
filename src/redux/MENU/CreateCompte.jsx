import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./formSlice.jsx";
import { useState } from "react";
import "./CreateCompte.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Commande soumise :", formData);
    setSuccessMessage(true); // عرض الرسالة بعد النجاح في الإرسال
  };

  const handleClick = () => {
    
  };

  return (
    <div className="container">
      <div className="form-container">
        {successMessage ? (
          <div className="success-message">
            <h2>Vous avez saisi les informations avec succès !</h2>
            <p>Restez à l'écoute des nouveautés sur notre site Web</p>
          </div>
        ) : (
          <>
            <div className="image-container">
              <img src="/public/form/bak.jpeg" alt="Illustration" />
            </div>

            <div className="form-box">
              <h2 className="title">Se Connecter</h2>
              <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                  <label>Nom complet </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Entrez votre nom complet"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Email </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Entrez votre email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Téléphone </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Entrez votre numéro de téléphone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Adresse</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Entrez votre adresse"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn" type="submit" onClick={handleClick}>
                  Se connecter
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
