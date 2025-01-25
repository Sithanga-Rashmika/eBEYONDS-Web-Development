import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="company-info">
            <img src="/images/logo.png" alt="logo"/>
            <address>
              Keas 69 Str. 15234, East Nile
              <br />
              Athens, Greece
              <br />
              +249 9123 456 78
              <br />
              +249 9123 456 78
            </address>
          </div>
          <div className="social-media">
            <h3>Stay connected with</h3>
            <div className="icons">
              <a href="#" aria-label="Facebook" className="icon facebook"></a>
              <a href="#" aria-label="Twitter" className="icon twitter"></a>
              <a href="#" aria-label="Instagram" className="icon instagram"></a>
              <a href="#" aria-label="LinkedIn" className="icon linkedin"></a>
              <a href="#" aria-label="YouTube" className="icon youtube"></a>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p className="text-copyright">© 2020 Reserved by Company Name Limited.</p>
          <p>Published: March 05, 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
