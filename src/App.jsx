import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";






import logo from "../public/logo.jpeg"
// Importation des composants


import Footer from "./redux/FOOTER/Footer.jsx";
import Home from "./redux/MENU/Home";
import ParfumFemme from "./redux/MENU/ParfumFemme";
import ParfumHomme from "./redux/MENU/ParfumHomme";
import Promotion from "./redux/MENU/Promotion";
import CreateCompte from "./redux/MENU/CreateCompte"
import SearchProduct from './redux/MENU/SearchProduct';
import Panier from "./redux/MENU/Panier";




import Checkout from "./redux/MENU/Checkout.jsx";
import ParfumDetails from "./redux/MENU/ParfumDetails"; // Si le fichier est dans redux/MENU/

import ProductList from "./redux/CardParfums/productList.jsx";





// importation des file text animation 
import BlurText from "./redux/AnimationTest/BlurText.jsx";



export default function App() {

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      borderRadius: "60px",
      border: "1px solid #000",

    },
    links: {
      display: "flex",
      gap: "100px",
    },
    link: {
      textDecoration: "none",
      color: "#000",
      fontWeight: "bold",
      fontSize: "14px",
      transition: "color 0.3s ease",

    },
    linkHover: {
      color: "#6351ce",
    },
    icons: {
      display: "flex",
      gap: "25px",
    },
    icon: {
      fontSize: "20px",
      color: "#000",
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    iconHover: {
      color: "#6351ce",
      transform: "scale(1.2)",
    },
  };

  return (
    <>




      <Router>
        <div>
          <nav style={styles.navbar}>
            <div style={styles.logo}>
              <img src="../public/logo.jpeg" alt="Logo" style={{ height: "40px" }} />
            </div>

            <div style={styles.links}>
              <Link
                to="/"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Accueil
              </Link>
              <Link
                to="/parfum-femme"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Parfum femme
              </Link>
              <Link
                to="/parfum-homme"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Parfum Homme
              </Link>
              <Link
                to="/promotion"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
              >
                Promotion
              </Link>
            </div>

            <div style={styles.icons}>
              <Link
                to="/account"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.iconHover.color;
                  e.target.style.transform = styles.iconHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.icon.color;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link
                to="/search"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.iconHover.color;
                  e.target.style.transform = styles.iconHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.icon.color;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to="/panier"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.target.style.color = styles.iconHover.color;
                  e.target.style.transform = styles.iconHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.icon.color;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parfum-femme" element={<ParfumFemme />} />
            <Route path="/parfum-homme" element={<ParfumHomme />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/account" element={<CreateCompte />} />
            <Route path="/search" element={<SearchProduct />} />
            <Route path="/panier" element={<Panier />} />




            <Route path="/parfum/:id" element={<ParfumDetails />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>
        </div>
      </Router>




      <div className="App">


      </div>




      <Footer />





    </>
  );
}
