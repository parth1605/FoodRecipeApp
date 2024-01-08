import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and related components

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Section1 from "./components/gluten";
import Section2 from "./components/vegan";
import Section3 from "./components/lactose";
import Section4 from "./components/sugarfree";
import Nutrition from "./components/nutrition"


import Axios from "axios";

function App() {
  const [search, setSerach] = useState("Gluten Free Food");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "fd63358d";
  const APP_KEY = "be2fbcb6345d55ef6b447866986cb702	";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <Router>
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<Recipe recipes={recipes} />} />
          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
          <Route path="/section4" element={<Section4 />} />
          <Route path="/nutrition" element={<Nutrition />} />

        </Routes>
      </div>
      <Footer />

    </div>
  </Router>
  );
}

export default App;
