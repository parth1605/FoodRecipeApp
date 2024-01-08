import RecipeItem from "./RecipeItem";
import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/5.jpg";
import backgroundImage1 from "../assets/5.jpg";
import backgroundImage2 from "../assets/6.jpg";
import backgroundImage3 from "../assets/7.jpg"; // New image
import vegan from "../assets/vegan.png";
import glutenfree from "../assets/glutenfree.png";
import lactosefree from "../assets/lactosefree.png";
import sugarfree from "../assets/sugarfree.jpg";

import { Link } from "react-router-dom"; 

const section1HeaderStyle = {
  backgroundColor: " #73A580",
  border: "1px solid #FF2F43",
  color: "white",
  padding: "20px",
  borderRadius: "50px",
};

const headerStyle = {
  fontSize: "36px",
  textAlign: "center",
};

const Recipe = (props) => {
  const { recipes } = props;
  const { search, onInputChange, onSearchClick } = props;
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [currentBackgroundImage, setCurrentBackgroundImage] =
    useState(backgroundImage);

  const jumbotronStyle = {
    backgroundImage: `url(${currentBackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "80%",
    borderRadius: "5px",
    marginBottom: "20px",
  };
  const section1ContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  };

  const blogPostStyle = {
    flex: "1",
    backgroundColor: "light",
    border: "1px solid light",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "left",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  };

  const h2Style = {
    fontSize: "24px",
    textAlign:"center",
    color: "black"
  };

  const pStyle = {
    fontSize: "16px",
    margin: "10px 0",
  };

  useEffect(() => {
    const backgroundImages = [
      backgroundImage1,
      backgroundImage2,
      backgroundImage3,
    ];
    let currentIndex = 0;
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
      {/* Jumbotron */}
      {/* <div className="jumbotron" style={jumbotronStyle}>
        <h1
          className="display-1"
          style={{
            width: "100%",
            fontSize: "100px",
            fontFamily: "Bropella Regular",
          }}
        >
          <i className="material-icons brand-icon">fastfood</i> Food Recipe
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
                search
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
        <div className="greet">
          <h3>
            Made with <i className="material-icons heart">favorite</i>
          </h3>
        </div>
      </div> */}
      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
        <Link to="/section2">
          <img
            // src="https://media0.giphy.com/media/XybHWtCXNUa05VJw2B/giphy.gif?cid=ecf05e47mzdq2ckgp9sepebe2zxsrr3duiw4tmqdpah7ztkt&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            src={vegan}
            alt="Vegan Italian Cuisine"
            style={imageStyle}
            
          />
          <h2 style={h2Style}>Vegan Food</h2>
         </Link>
        </article>
        <article style={blogPostStyle}>
        <Link to="/section1">

          <img
            // src="https://media4.giphy.com/media/dz6osUGdvkdKswGfwT/giphy.gif?cid=ecf05e47rku004oc7y6jt1qvd0x7n5i4qj2t52t5x1nucmlh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            src={glutenfree}
            alt="Vegan Italian Cuisine"
            style={imageStyle}
          />
          <h2 style={h2Style}>Gluten Free Food</h2>
          </Link>
        </article>

        <article style={blogPostStyle}>
        <Link to="/section3">

          <img
            // src="https://media.tenor.com/8tQJUEx8LfIAAAAi/misterpizza-mistepizzafirenze.gif"
            src={lactosefree}
            alt="Vegan Italian Cuisine"
            style={imageStyle}
          />
          <h2 style={h2Style}>Lactose Free Food</h2>
          </Link>
      
        </article>
        <article style={blogPostStyle}>
        <Link to="/section4">
              <img
                // src="https://media.tenor.com/8tQJUEx8LfIAAAAi/misterpizza-mistepizzafirenze.gif"
                src={sugarfree}
                alt="Vegan Italian Cuisine"
                style={imageStyle}
              />
              <h2 style={h2Style}>Sugar Free Food</h2>
              </Link>
      
        </article>
      </div>
      &nbsp;
      <header style={section1HeaderStyle}>
        <h1 style={headerStyle}>Searched Food Blog</h1>
      </header>
      &nbsp;
      <div class="card-columns">
        {recipes.map((recipe) => (
          <RecipeItem
            key={Math.random() * 100}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
