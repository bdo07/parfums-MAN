import React from 'react'
import './Footer.css';
function Footer() {
  return (
    
      

      <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3 className='h3'>COLORLIB</h3>
                <p className='h3'>© 2025</p>
            </div>
            <div class="footer-section">
                <h3 className='h3'>Customers</h3>
                <ul>
                    <li><a href="#">Buyer</a></li>
                    <li><a href="#">Supplier</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 className='h3'><span class="dot"></span> Company</h3>
                <ul>
                    <li><a href="/">ACCUEIL</a></li>
                    <li><a href="/parfum-femme">PARFUM FEMME</a></li>
                    <li><a href="/parfum-homme">PARFUM HOMME </a></li>
                    <li><a href="/promotion">PROMOTION</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 className='h3'>Further Information</h3>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 className='h3'> Follow us</h3>
                <div class="social-icons">
                    <a href="https://www.google.com">🌍</a>   
                    <a href="https://www.facebook.com">📘</a>   
                    <a href="https://www.twitter.com">🐦</a>   
                    <a href="https://www.linkedin.com">💼</a>   
                    <a href="https://www.instagram.com">✈️</a>   
                </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer
