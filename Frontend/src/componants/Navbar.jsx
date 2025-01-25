import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ENGLISH");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null); 
  const dropdownRef = useRef(null);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setDropdownOpen(false);

    toast.success(`Language changed to ${language}`, { id: "toast" });
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false); 
        setDropdownOpen(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-container">
            <div className="logo">
              <img src="/images/logo.png" />
            </div>
            <div
              className="language-selector"
              ref={dropdownRef}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <span>{currentLanguage}</span>
              <i className="arrow-down"></i>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleLanguageChange("ENGLISH")}>
                    ENGLISH
                  </li>
                  <li onClick={() => handleLanguageChange("SPANISH")}>
                    SPANISH
                  </li>
                  <li onClick={() => handleLanguageChange("FRENCH")}>FRENCH</li>
                </ul>
              )}
            </div>
          </div>

          <div className="right-container">
            <ul className="nav-links">
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <div className="menu-toggle" ref={menuRef} onClick={toggleMenu}>
              <img
                className="hamburger"
                src="/images/hamburger-menu-icon.svg"
              />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="mobile-menu">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
