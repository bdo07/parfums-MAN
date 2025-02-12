import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./formSlice.jsx";
import "./CreateCompte.css";



const LoginForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Commande soumise :", formData);
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Image sur la gauche */}
        <div className="image-container">
          <img src="/public/form/bak.jpeg" alt="Illustration" />
        </div>

        {/* Formulaire */}
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

            <button className="btn" type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
