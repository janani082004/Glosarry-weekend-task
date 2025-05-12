import { Container } from "react-bootstrap";
import logo from './img/breeze-logo.svg';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-logo">
          <img src={logo} alt="Breeze Logo" />
          <div className="logo-line"></div>
        </div>

        <div className="footer-container">
          <div className="footer-column features-col">
            <h4 className="feature">Features</h4>
            <div className="features-columns">
              <div class="features-col">
                <ul>
                  <li>Cookie & Cache</li>
                  <li>Responsive Layout</li>
                  <li>Take Screenshot</li>
                  <li>Live Edit</li>
                  <li>SEO Panel</li>
                  <li>What is?</li>
                  <li>Media</li>
                </ul>
              </div>
              <div class="features-col">
                <ul>
                  <li>Environment</li>
                  <li>Browser Support</li>
                  <li>Tech Stack</li>
                  <li>Screenshot Audit</li>
                  <li>Team Sharing</li>
                  <li>Page Manager</li>
                  <li>Checklist</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-column company-col">
            <h5 className="feature" id="featured">Company</h5>
            <ul>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-column chrome-col">
            <div className="footer-column chrome-col1">
              <img
                src="https://www.gstatic.com/images/branding/product/2x/chrome_64dp.png"
                alt="Chrome"
                className="chrome-logo"
              />
              <p className="gray-text">
                Available in the<br />
                <span className="white-text">Chrome Web Store</span>
              </p>
            </div>
            <h3 className="reviews">Check out our 9 reviews</h3>
            <p className="stars">★★★★☆</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bot">
            <h4>© SCube.co</h4>
            <p>
              SCube.co & SCube Theme is trading name for SCube Digital Limited.
              <br />
              SCube is Trademarked with UK Government.
            </p>
          </div>
          <div className="policies">
            <ul>
              <li>Terms & Policies</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
