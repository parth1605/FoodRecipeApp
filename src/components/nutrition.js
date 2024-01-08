import React, { useState } from 'react';
import '../assets/css/style.css'

const Nutrition = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const appId = 'be3ac7fa';
    const appKey = '7ea2666434c84f997760b06cc4e606b7';

    try {
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(inputValue)}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setResult(data);
      } else {
        console.error('API call failed');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const styles = {
    nutritionContainer: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    nutritionForm: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    formControl: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    resultContainer: {
      marginTop: '20px',
    },
    resultText: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
  };
  
const section1HeaderStyle = {
  backgroundColor: " #73A580",
  border: "1px solid #73A580",
  color: "white",
  padding: "20px",
  borderRadius:"50px"
};

const headerStyle = {
  fontSize: "36px",
  textAlign: "center"
};


  return (
    <div>
       <header style={section1HeaderStyle}>
        <h1 style={headerStyle}>Nutrition Analysis</h1>
      </header>
      &nbsp;
    <div style={styles.nutritionContainer}>
      <form onSubmit={handleFormSubmit} style={styles.nutritionForm}>
        <textarea
          style={styles.formControl}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter ingredients (e.g., 100g paneer, 1 egg)"
        />
        <button style={styles.button} type="submit">
          Analyze
        </button>
      </form>

      {result !== null && result.totalCO2Emissions > 0 ? (

            <div class="col-12">
              <section class="performance-facts" id="performance-facts">
                {" "}
                <div class="performance-facts__header">
                  {" "}
                  <h1 class="performance-facts__title">Nutrition Facts</h1>{" "}
                  <p>
                    <span id="lnumser">0</span> servings per container
                  </p>{" "}
                </div>{" "}
                <table class="performance-facts__table">
                  {" "}
                  <thead>
                    {" "}
                    <tr>
                      {" "}
                      <th colspan="3" class="amps">
                        Amount Per Serving
                      </th>{" "}
                    </tr>{" "}
                  </thead>{" "}
                  <tbody>
                    {" "}
                    <tr>
                      {" "}
                      <th colspan="2" id="lkcal-val-cal">
                        <b>Calories</b>
                      </th>{" "}
                      <td class="nob">{result.calories}</td>{" "}
                    </tr>{" "}
                    <tr class="thick-row">
                      {" "}
                      <td colspan="3" class="small-info">
                        <b>% Daily Value*</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <th colspan="2">
                        <b>Total Fat</b> {result.totalNutrients.FAT.quantity} {result.totalNutrients.FAT.unit}
                      </th>{" "}
                      <td>
                        <b>{result.totalDaily.FAT.quantity.toFixed(0)} {result.totalDaily.FAT.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <td class="blank-cell"></td> <th>Saturated Fat {result.totalNutrients.FASAT.quantity} {result.totalNutrients.FASAT.unit} </th>{" "}
                      <td>
                        <b>{result.totalDaily.FASAT.quantity.toFixed(0)} {result.totalDaily.FASAT.unit}</b>
                      </td>{" "}
                    </tr>{" "}

                    <tr>
                      {" "}
                      <th colspan="2">
                        <b>Cholesterol</b> {result.totalNutrients.CHOLE.quantity} {result.totalNutrients.CHOLE.unit}
                      </th>{" "}
                      <td>
                        <b>{result.totalDaily.CHOLE.quantity.toFixed(0)} {result.totalDaily.CHOLE.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <th colspan="2">
                        <b>Sodium</b> {result.totalNutrients.NA.quantity} {result.totalNutrients.NA.unit}
                      </th>{" "}
                      <td>
                        <b>{result.totalDaily.NA.quantity.toFixed(0)} {result.totalDaily.NA.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <th colspan="2">
                        <b>Total Carbohydrate</b> {result.totalNutrients.CHOCDF.quantity} {result.totalNutrients.CHOCDF.unit}
                      </th>{" "}
                      <td>
                        <b>{result.totalDaily.CHOCDF.quantity.toFixed(0)} {result.totalDaily.CHOCDF.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <td class="blank-cell"></td> <th>Dietary Fiber {result.totalNutrients.FIBTG.quantity} {result.totalNutrients.FIBTG.unit}</th>{" "}
                      <td>
                        <b>{result.totalDaily.FIBTG.quantity.toFixed(0)} {result.totalDaily.FIBTG.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <td class="blank-cell"></td> <th>Total Sugars {result.totalNutrients.SUGAR.quantity} {result.totalNutrients.SUGAR.unit}</th>{" "}
                      <td></td>{" "}
                    </tr>{" "}
                    <tr class="thick-end">
                      {" "}
                      <th colspan="2">
                        <b>Protein</b> {result.totalNutrients.PROCNT.quantity} {result.totalNutrients.PROCNT.unit}
                      </th>{" "}
                      <td>
                        <b>{result.totalDaily.PROCNT.quantity.toFixed(0)} {result.totalDaily.PROCNT.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                  </tbody>{" "}
                </table>{" "}
                <table class="performance-facts__table--grid">
                  {" "}
                  <tbody>
                    {" "}
                    <tr>
                      {" "}
                      <th>Vitamin D {result.totalNutrients.VITD.quantity} {result.totalNutrients.VITD.unit}</th>{" "}
                      <td>
                        <b>{result.totalDaily.VITD.quantity.toFixed(0)} {result.totalDaily.VITD.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <th>Calcium {result.totalNutrients.CA.quantity.toFixed(2)} {result.totalNutrients.CA.unit}</th>{" "}
                      <td>
                        <b>{result.totalDaily.CA.quantity.toFixed(0)} {result.totalDaily.CA.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr>
                      {" "}
                      <th>Iron {result.totalNutrients.FE.quantity.toFixed(2)} {result.totalNutrients.FE.unit}</th>{" "}
                      <td>
                        <b>{result.totalDaily.FE.quantity.toFixed(0)} {result.totalDaily.FE.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                    <tr class="thin-end">
                      {" "}
                      <th>Potassium {result.totalNutrients.K.quantity} {result.totalNutrients.K.unit}</th>{" "}
                      <td>
                        <b>{result.totalDaily.K.quantity.toFixed(0)} {result.totalDaily.K.unit}</b>
                      </td>{" "}
                    </tr>{" "}
                  </tbody>{" "}
                </table>{" "}
                <p class="small-info" id="small-nutrition-info">
                  *Percent Daily Values are based on a 2000 calorie diet
                </p>
              </section>
            </div>
      ) : (
        <div style={{ ...styles.resultContainer, textAlign: 'center', color:'red' }}>
        <p style={styles.resultText}>
          {result && result.totalCO2Emissions === 0 
          && "Invalid Food."
            }
        </p>
      </div>
      )
      }
    </div>
    </div>
  );
};

export default Nutrition;