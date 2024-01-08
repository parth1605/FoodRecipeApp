import React, { useState } from "react";
import cake from "../assets/cake.jpg"
import tuffles  from "../assets/tuffles.jpg"

const section1ContainerStyle = {
  textAlign: "center",
  padding: "20px",
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
  backgroundColor: "#73A580",
  border: "1px solid #73A580",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "left",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const h2Style = {
  fontSize: "24px",
  color: "white",
};

const pStyle = {
  fontSize: "16px",
  margin: "10px 0",
  color: "white",
};

const readMoreLinkStyle = {
  display: "inline-block",
  color: "#34d123",
  textDecoration: "none",
  fontWeight: "600",
  marginTop: "10px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  marginBottom: "20px",
};
const Section1 = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const openModal1 = () => setModal1Visible(true);
  const closeModal1 = () => setModal1Visible(false);

  const openModal2 = () => setModal2Visible(true);
  const closeModal2 = () => setModal2Visible(false);
  return (
    <div style={section1ContainerStyle}>
      <header style={section1HeaderStyle}>
        <h1 style={headerStyle}>Sugar Free Food</h1>
      </header>
      &nbsp;
      <article style={blogPostStyle}>
          <h2 style={h2Style}>
          Sugar-free food is devoid of added sugars, often using artificial sweeteners.          </h2>
          <p style={pStyle}>
          Sugar-free foods have become increasingly prevalent as individuals become more conscious of their sugar intake for various health reasons. These products are often marketed as alternatives for those with conditions like diabetes or those looking to cut down on calories. Artificial sweeteners such as aspartame, sucralose, and stevia are commonly used to replace sugar, providing a sweet taste without the accompanying spike in blood sugar levels. While sugar-free options can be a valuable tool for managing dietary concerns, it's crucial to approach them with a balanced perspective. Some studies have raised questions about the long-term effects of consuming artificial sweeteners, emphasizing the importance of moderation and considering the overall nutritional profile of the foods.

<br></br>When opting for sugar-free alternatives, it's essential to be mindful of the ingredients present in these products. While they may lack traditional sugar, they can still contain other components that might impact health. Reading labels carefully and staying informed about the different types of sweeteners used can help individuals make informed choices. Incorporating a variety of whole, nutrient-rich foods into the diet remains a cornerstone of a healthy lifestyle, and while sugar-free options can be part of that, they should not overshadow the importance of a well-rounded and diverse approach to nutrition.

<br></br>In conclusion, sugar-free foods offer a practical solution for individuals looking to manage their sugar intake or control specific health conditions. However, maintaining a balanced perspective, practicing moderation, and staying informed about the ingredients in these products are crucial for making healthy dietary choices. Integrating sugar-free options thoughtfully into a diverse and nutrient-rich diet can contribute to overall well-being while addressing specific health concerns.
 </p>
       

        </article>
      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
          <img
          src={cake}
            // src="https://images.unsplash.com/photo-1544681280-d25a782adc9b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lactose-Free Foods: A Tasty Alternative"
            style={imageStyle}
            onClick={openModal1}
          />
          <h2 style={h2Style}>Sugar-Free Foods: A Tasty Alternative</h2>
          <p style={pStyle}>
          Sugar-free cheesecake is a delightful dessert that offers a delicious alternative to traditional cheesecake while catering to those mindful of their sugar intake. Here are five benefits of indulging in this sweet treat:
          </p>
          <p style={pStyle}>
            <strong>Benefits</strong>
          </p>
          <p style={pStyle}>
            1. <strong>Blood Sugar Management:</strong>
          </p>
          <p style={pStyle}>
          As the name suggests, sugar-free cheesecake eliminates added sugars, making it a suitable option for individuals with diabetes or those aiming to regulate their blood sugar levels. The use of sugar substitutes allows for a satisfyingly sweet experience without the glycemic impact.
          </p>
          <p style={pStyle}>
            2. <strong>Calorie Control:</strong>
          </p>
          <p style={pStyle}>
          Traditional cheesecake is often high in calories due to its sugar and fat content. Sugar-free versions, sweetened with alternatives like stevia or erythritol, provide a guilt-free option for those watching their calorie intake while still enjoying a rich and creamy dessert.
          </p>
          <p style={pStyle}>
            3. <strong>Dental Health:</strong>
          </p>
          <p style={pStyle}>
          Excessive sugar consumption is associated with dental issues. Sugar-free cheesecake minimizes the risk of tooth decay and cavities, offering a tooth-friendly alternative for those with a sweet tooth.
          </p>
          <p style={pStyle}>
            4. <strong>Weight Management:</strong>
          </p>
          <p style={pStyle}>
          With reduced or no sugar content, sugar-free cheesecake becomes a favorable choice for individuals on weight management journeys. It allows for a sweet treat without the added calories that can contribute to weight gain.
          </p>
          <p style={pStyle}>
            5. <strong>Dietary Flexibility:</strong>
          </p>
          <p style={pStyle}>
          Sugar-free cheesecake caters to a variety of dietary preferences and restrictions, including low-carb and ketogenic diets. It provides an option for individuals looking to maintain a specific eating plan while still enjoying a classic dessert experience.
          </p>
          <p style={pStyle}>
          In summary, sugar-free cheesecake not only satisfies sweet cravings but also offers health-conscious individuals a range of benefits, from blood sugar control to dental health and weight management.
          </p>

         
        </article>

        <article style={blogPostStyle}>
          <img
            src={tuffles}
            // src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Savoring Delicious Lactose-Free Delights: A Journey into Lactose-Free Foods"
            style={imageStyle}
            onClick={openModal2}
          />
          <h2 style={h2Style}>Sugar-Free Foods: A Tasty Alternative</h2>
          <p style={pStyle}>
          Sugar-free chocolate truffles are a delectable confectionery that provides a guilt-free option for chocolate lovers aiming to minimize their sugar intake. Here are five distinct benefits of indulging in these delightful treats:
          </p>
          <p style={pStyle}>
            <strong>Benefits</strong>
          </p>
          <p style={pStyle}>
            1. <strong>Antioxidant-Rich:</strong>
          </p>
          <p style={pStyle}>
          Dark chocolate, often used in sugar-free truffles, is rich in antioxidants such as flavonoids. These compounds contribute to overall health by neutralizing free radicals in the body, potentially reducing the risk of chronic diseases.          </p>
          <p style={pStyle}>
            2. <strong>Mood Enhancement:</strong>
          </p>
          <p style={pStyle}>
          Chocolate is known to stimulate the production of endorphins, the "feel-good" hormones. Sugar-free chocolate truffles allow for this mood enhancement without the excessive sugar content, making them a delightful and guilt-free treat for boosting happiness.          </p>
          <p style={pStyle}>
            3. <strong>Heart Health:</strong>
          </p>
          <p style={pStyle}>
          Dark chocolate has been associated with cardiovascular benefits, including improved blood flow and lower blood pressure. Sugar-free chocolate truffles, particularly those with a high cocoa content, offer a heart-healthy alternative for those conscious of their cardiovascular well-being.          </p>
          <p style={pStyle}>
            4. <strong>Blood Sugar Control:</strong>
          </p>
          <p style={pStyle}>
          By utilizing sugar substitutes or natural sweeteners, sugar-free chocolate truffles provide a lower glycemic impact compared to traditional chocolate treats. This makes them suitable for individuals managing diabetes or those aiming to stabilize blood sugar levels.          </p>
          <p style={pStyle}>
            5. <strong>Weight Maintenance:</strong>
          </p>
          <p style={pStyle}>
          Sugar-free chocolate truffles allow for a decadent chocolate experience without the added calories from sugar. This makes them a favorable choice for individuals on weight management journeys, offering a satisfying treat without compromising dietary goals.          </p>
          <p style={pStyle}>
          In conclusion, sugar-free chocolate truffles stand out with their antioxidant-rich profile, mood-enhancing properties, heart health benefits, blood sugar control, and support for weight maintenance. These treats provide a delightful and health-conscious way to enjoy the indulgence of chocolate without the drawbacks of excessive sugar consumption.          </p>
         
        </article>
      </div>
      {modal1Visible && (
  <div className="modal" onClick={closeModal1}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p>
            <strong>
              Sugar-Free Recipe: Cheese Cake
            </strong>
          </p>
    <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li>
            2 cups sugar-free graham cracker crumbs (for the crust)
            </li>
            <li>1/2 cup unsalted butter, melted (for the crust)</li>
            <li>3 packages (24 ounces) cream cheese, softened</li>
            <li>1 cup sugar substitute (such as erythritol or stevia)</li>
            <li>1 teaspoon vanilla extract</li>
            <li>3 large eggs</li>
            <li>
            1 cup sour cream
            </li>
            <li>Sugar-free whipped cream for topping (optional)</li>
          </ul>
       
    <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>
            Combine 2 cups sugar-free graham cracker crumbs with 1/2 cup melted unsalted butter. Press the mixture firmly into the base of a springform pan and refrigerate to set.
            </li>
            <li>
            Beat 3 packages (24 ounces) of softened cream cheese until smooth.
            </li>
            <li>
            Add 1 cup sugar substitute and 1 teaspoon vanilla extract; beat until well combined.
            </li>
            <li>
            Add 3 large eggs, one at a time, beating well after each addition.
            </li>
            <li>Mix in 1 cup of sour cream until the filling is smooth.</li>
            <li>
            Pour the cream cheese filling onto the prepared crust in the springform pan.
            </li>
            <li>Preheat the oven to the specified temperature. Bake the cheesecake until the center is set.</li>
            <li>
            Cool at room temperature, then refrigerate for several hours or overnight to set.
            </li>
            <li>
            Remove from the springform pan and optionally top with sugar-free whipped cream before serving.            </li>
          </ol>
          <p>
            <strong>Conclusion</strong>
          </p>
          <p>
          In summary, sugar-free cheesecake not only satisfies sweet cravings but also offers health-conscious individuals a range of benefits, from blood sugar control to dental health and weight management.
          </p>
    </div>
  </div>
)}

{modal2Visible && (
  <div className="modal" onClick={closeModal2}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p>
            <strong>Recipe: Sugar-Free chocolate truffles </strong>
          </p>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li>
            1 cup sugar-free dark chocolate chips
            </li>
            <li>1/2 cup heavy cream</li>
            <li>2 tablespoons unsalted butter</li>
            <li>1 teaspoon vanilla extract</li>
            <li>Unsweetened cocoa powder or shredded coconut for coating (optional)</li>
            </ul>
          <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>
            Heat 1/2 cup of heavy cream until simmering; then, remove from heat and stir in 1 cup of sugar-free dark chocolate chips and 2 tablespoons of unsalted butter until smooth.
            </li>
            <li>
            Add 1 teaspoon of vanilla extract to the chocolate mixture and mix thoroughly.
            </li>
            <li>
            Allow the mixture to cool briefly, then transfer it to the refrigerator and chill for at least 2 hours until it becomes firm.
            </li>
            <li>
            Scoop small portions of the chilled mixture and shape them into round truffles.
            </li>
            <li>
            Optionally, roll each truffle in unsweetened cocoa powder or shredded coconut for added flavor.
            </li>
            <li>
            If needed, place the shaped truffles back in the refrigerator for a short time to firm up.
            </li>
            <li>
            Once set, the truffles are ready to be served—enjoy these sugar-free chocolate treats guilt-free!
            </li>
          </ol>
          <p>
            <strong>Conclusion:</strong>
          </p>
          <p>
          n conclusion, sugar-free chocolate truffles stand out with their antioxidant-rich profile, mood-enhancing properties, heart health benefits, blood sugar control, and support for weight maintenance. These treats provide a delightful and health-conscious way to enjoy the indulgence of chocolate without the drawbacks of excessive sugar consumption.
          </p>
    </div>
  </div>
)}

    </div>
  );
};

export default Section1;
