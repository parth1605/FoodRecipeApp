import React from "react";


const blogPostStyle = {
  flex: "1",
  backgroundColor: "#73A580",
  border: "1px solid white",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "left",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  color : "white",
};


const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
 
  return (

      <div class="card py-2 text-center" style={blogPostStyle}>

        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div class="card-body"> 
          <h5 style={{color: "#ffffff"}}>{name}</h5>
        </div>
        <ul class="list-group list-group-flush" >
          {ingredientLines.map(ingredient => (
            <li className="list-group-item" style={blogPostStyle}>{ingredient}</li>
          ))}
        </ul>
      </div>
  );
};

export default RecipeItem;
