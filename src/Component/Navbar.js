import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './img/breeze-logo.svg';
import "./Navbar.css";
import Container from 'react-bootstrap/Container';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const isShown = menu.classList.toggle('show');
    menu.setAttribute('aria-hidden', !isShown);
    setMenuOpen(isShown);
  }


  return (
    <>
      <nav className="navbar">
        <Container>
          <div className="nav-left">
            <img src={logo} alt="Breeze logo" className="logo" />
            <div className="nav-links">

              <Link to="#">Product <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" style={{ marginLeft: "10px" }} fill="rgb(234, 242, 255)" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg></Link>

              <Link to="#">Resources <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" style={{ marginLeft: "10px" }} fill="rgb(234, 242, 255)" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg></Link>
              <Link to="#">Contact Us</Link>
              <Link to="#">Download</Link>
              <Link to="#">Pricing</Link>
            </div>
          </div>
          <div className="nav-center">
            <button className="login-btn">Login</button>
          </div>
          <div className="nav-right">
            <button className="login-btn">Login</button>
            <button className="create-btn">Create Account</button>
            <button className="hamburger" aria-label="Toggle menu" type="button" onClick={toggleMenu}>
              {menuOpen ? (
                <span className="close-icon">✕</span>
              ) : (
                <>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </>
              )}
            </button>

          </div>
        </Container>
        <div id="mobileMenu" className="mobile-menu" aria-hidden="true">
          <Link to="#">Product</Link>
          <Link to="#">Resources</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">Download</Link>
          <Link to="#">Pricing</Link>
          <button className="login-btn full">Login</button>
          <button className="create-btn full">Create Account</button>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
