import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/5.jpg";
import logoImage from "../assets/logo.png";
import logoImageWhite from "../assets/logo-white.png";
import backgroundImage1 from "../assets/5.jpg";
import backgroundImage2 from "../assets/6.jpg";
import backgroundImage3 from "../assets/7.jpg";
import newgif from "../assets/new.gif";


const Header = (props) => {
  const { search,onInputChange, onSearchClick } = props;
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(backgroundImage);

  const jumbotronStyle = {
    backgroundImage: `url(${currentBackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  useEffect(() => {
    const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3];
    let currentIndex = 1;
    const changeBackgroundImage = () => {
      currentIndex = (currentIndex + 1) % backgroundImages.length;
      setCurrentBackgroundImage(backgroundImages[currentIndex]);
    };

    const intervalId = setInterval(changeBackgroundImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#73A580', height: '60px', margin: 'auto' }}>
        <div className="container" style={{marginLeft: '60px', marginRight: '60px', maxWidth: '100%',}}>
        <div className="logo-container">
          <img src={logoImageWhite} alt="Logo" className="logo-nav" />
        </div>
          <a className="navbar-brand" style={{ width: '100%', fontSize: '40px', fontFamily: 'Bropella Regular', color: 'white' }}>
            <strong></strong>
          </a>
          <Link style={{textDecoration: 'none',}} to="/">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{display: 'unset', color: 'white', border: 'rgba(255,255,255,0)', outline: 'none',}}
            >
              <span>Home</span>
            </button>
          </Link>
          <Link style={{textDecoration: 'none',}} to="/section2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{display: 'unset', color: 'white', border: 'rgba(255,255,255,0)', outline: 'none',}}
            >
              <span>Vegan</span>
            </button>
          </Link>
          <Link style={{textDecoration: 'none',}} to="/section1">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{display: 'unset', color: 'white', border: 'rgba(255,255,255,0)', outline: 'none',}}
            >
              <span>Gluten Free</span>
            </button>
          </Link>
          <Link style={{textDecoration: 'none',}} to="/section3">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{display: 'unset', color: 'white', border: 'rgba(255,255,255,0)', outline: 'none',}}
            >
              <span>Lactose Free</span>
            </button>
          </Link>
          <Link style={{textDecoration: 'none',}} to="/section4">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{display: 'unset', color: 'white', border: 'rgba(255,255,255,0)', outline: 'none',}}
            >
              <span>Sugar Free</span>
            </button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/nutrition">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ display: 'unset', color: 'white', border: 'rgba(255,255,255,0)', outline: 'none' }}
          >
            {/* Replace the text with an img tag */}
            <img src={newgif} alt="Nutrition" style={{ maxWidth: '70%', maxHeight: '70%', marginLeft: '-80px' }} />
          </button>
        </Link>
        </div>
      </nav>
      <div className={`sidenav ${isSideNavOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <Link to="/" onClick={closeSideNav}>
          Home
        </Link>
        <Link to="/section2" onClick={closeSideNav}>
          Vegan Food
        </Link>
        <Link to="/section1" onClick={closeSideNav}>
          Gluten Free
        </Link>
        <Link to="/section3" onClick={closeSideNav}>
          Lactose Free
        </Link>
        <Link to="/section4" onClick={closeSideNav}>
          Sugar Free
        </Link>
        <Link to="/nutrition" onClick={closeSideNav}>
          Nutrition Analysis
        </Link>
      </div>

      <div className="menu-button" onClick={toggleSideNav}>
        <div className={`bar ${isSideNavOpen ? "open" : ""}`}></div>
        <div className={`bar ${isSideNavOpen ? "open" : ""}`}></div>
        <div className={`bar ${isSideNavOpen ? "open" : ""}`}></div>
      </div>
      <div className="jumbotron" style={jumbotronStyle}>
        <h1
          className="display-1"
          style={{
            width: "100%",
            fontSize: "100px",
            fontFamily: "Bropella Regular",
          }}
        >
          <i className="material-icons brand-icon"></i> SAVORY PALATE
        </h1>
        <div className="input-group w-50 mx-auto">
          <div className="input-group-prepend">
            <button
              className="btn btn-dark"
              style={{
                fontSize: "0",
                padding: "0",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={onSearchClick}

              
            >
    <i className="material-icons" style={{ fontSize: "40px" }}>
      <Link style={{color: "white",}} to="/">search</Link>
    </i>
            </button>
          </div>
          <input
            style={{
              width: "100%",
              fontSize: "40px",
              fontFamily: "Bropella Regular",
              borderRadius: "20px",
              paddingLeft: "40px",
            }}
            type="text"
            className="form-control"
            placeholder="Search Your Recipe..."
            value={search}
            onChange={onInputChange}
            
          />
        </div>
        {/* <div className="greet">
          <h3>
            Search Your Recipe For a Healthier Life
          </h3>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
