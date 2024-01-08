import React, { useState } from "react";

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
        <h1 style={headerStyle}>Lactose Free Food</h1>
      </header>
      &nbsp;
      <article style={blogPostStyle}>
          <h2 style={h2Style}>
          Lactose is a natural sugar found in milk and dairy products.          </h2>
          <p style={pStyle}>
          It is composed of two simpler sugars, glucose and galactose. Lactose is typically broken down by an enzyme called lactase, which is produced in the small intestine, allowing for proper digestion.

However, some individuals experience lactose intolerance, a condition where the body produces insufficient lactase, leading to difficulties in digesting lactose.s Common symptoms include bloating, gas, and abdominal discomfort after consuming dairy products.

<br></br>To accommodate individuals with lactose intolerance, there is a variety of lactose-free and lactose-reduced products available in the market. These products undergo processes that break down lactose, making them more easily digestible for those with lactose sensitivity.

<br></br>It's important to note that lactose intolerance is different from a milk allergy, where the immune system reacts to proteins in milk rather than the sugar (lactose). For individuals without lactose intolerance or milk allergies, dairy products can be a valuable source of essential nutrients like calcium and vitamin D.

<br></br>In summary, lactose is a sugar present in milk, and lactose intolerance can result in digestive issues. Lactose-free alternatives provide options for those with sensitivity, while dairy products remain a nutritious choice for individuals without lactose-related concerns. </p>
       

        </article>
      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1544681280-d25a782adc9b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lactose-Free Foods: A Tasty Alternative"
            style={imageStyle}
            onClick={openModal1}
          />
          <h2 style={h2Style}>Lactose-Free Foods: A Tasty Alternative</h2>
          <p style={pStyle}>
            Lactose intolerance is a common dietary issue affecting millions of
            people around the world. For those who have trouble digesting
            lactose, a sugar found in milk and dairy products, enjoying a tasty
            and satisfying meal can sometimes be a challenge. However, there are
            plenty of delicious lactose-free food options available, and we're
            here to explore some of these alternatives and share a delectable
            recipe to get you started on your lactose-free culinary journey.
          </p>
          <p style={pStyle}>
            <strong>Lactose-Free Foods: A World of Options</strong>
          </p>
          <p style={pStyle}>
            1. <strong>Plant-Based Milk</strong>
          </p>
          <p style={pStyle}>
            One of the first and most obvious substitutes for cow's milk is
            plant-based milk. There is a wide variety of lactose-free options
            available, such as almond milk, soy milk, oat milk, and coconut
            milk. These alternatives are not only lactose-free but also come in
            various flavors, making them suitable for various culinary
            applications, from cereal to baking.
          </p>
          <p style={pStyle}>
            2. <strong>Lactose-Free Yogurt</strong>
          </p>
          <p style={pStyle}>
            Lactose-free yogurt is a fantastic alternative to traditional dairy
            yogurt. Made from coconut, almond, or soy, these yogurts are creamy
            and delicious, and they can be enjoyed on their own or as a base for
            smoothies, dressings, or parfaits.
          </p>
          <p style={pStyle}>
            3. <strong>Non-Dairy Cheese</strong>
          </p>
          <p style={pStyle}>
            Non-dairy cheese options have come a long way in terms of taste and
            texture. You can find lactose-free cheese alternatives made from
            almonds, cashews, or soy, which can be used in sandwiches, pasta
            dishes, or even enjoyed as a cheesy dip.
          </p>
          <p style={pStyle}>
            4. <strong>Nut Butters</strong>
          </p>
          <p style={pStyle}>
            Nut butters like almond, peanut, and cashew butter are excellent
            choices for a lactose-free spread on your morning toast, to add
            richness to smoothies, or as an ingredient in many recipes, both
            sweet and savory.
          </p>
          <p style={pStyle}>
            5. <strong>Fruits and Vegetables</strong>
          </p>
          <p style={pStyle}>
            Don't underestimate the deliciousness of fresh fruits and vegetables
            in your diet. These natural, unprocessed foods are lactose-free and
            packed with nutrients. Get creative with salads, stir-fries, or
            smoothie bowls that incorporate a variety of colorful produce.
          </p>

         
        </article>

        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Savoring Delicious Lactose-Free Delights: A Journey into Lactose-Free Foods"
            style={imageStyle}
            onClick={openModal2}
          />
          <h2 style={h2Style}>
            Savoring Delicious Lactose-Free Delights: A Journey into
            Lactose-Free Foods
          </h2>
          <p style={pStyle}>
            Lactose intolerance, a condition in which the body struggles to
            digest lactose, the sugar found in dairy products, can often be a
            challenge when it comes to enjoying food. However, the world of
            lactose-free cuisine is rich with delicious options that allow those
            with lactose intolerance to savor culinary delights without the
            discomfort. In this blog, we'll explore the world of lactose-free
            foods and introduce you to a mouthwatering recipe for Lactose-Free
            Creamy Tomato Basil Pasta.
          </p>
          <p style={pStyle}>
            <strong>Understanding Lactose Intolerance:</strong>
          </p>
          <p style={pStyle}>
            Lactose intolerance is a common digestive issue that affects
            millions of people worldwide. It occurs when the small intestine
            doesn't produce enough of the enzyme lactase, which is responsible
            for breaking down lactose. When lactose isn't properly digested, it
            can lead to symptoms like bloating, gas, diarrhea, and abdominal
            discomfort.
          </p>
          <p style={pStyle}>
            <strong>Exploring Lactose-Free Food Options:</strong>
          </p>
          <ul>
            <li>
              <strong>Plant-Based Milk:</strong> Replace cow's milk with a
              variety of plant-based milk alternatives such as almond, soy, oat,
              rice, and coconut milk. These options are not only lactose-free
              but also offer a range of flavors and textures to suit your
              preferences.
            </li>
            <li>
              <strong>Non-Dairy Yogurt:</strong> You can find lactose-free
              yogurt made from almond, coconut, or soy milk in many grocery
              stores. They are rich in probiotics, just like traditional yogurt,
              offering the same gut-friendly benefits.
            </li>
            <li>
              <strong>Lactose-Free Cheese:</strong> There are lactose-free
              cheese alternatives available that mimic the taste and texture of
              dairy cheese. These can be used in various recipes without
              compromising on flavor.
            </li>
            <li>
              <strong>Lactose-Free Sour Cream and Cream Cheese:</strong> You can
              easily replace traditional dairy sour cream and cream cheese with
              lactose-free versions to create delectable dishes like dips and
              cheesecakes.
            </li>
          </ul>
         
        </article>
      </div>
      {modal1Visible && (
  <div className="modal" onClick={closeModal1}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p>
            <strong>
              Lactose-Free Recipe: Creamy Garlic and Spinach Penne
            </strong>
          </p>
    <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li>
              8 ounces of gluten-free penne pasta (or your preferred pasta)
            </li>
            <li>2 tablespoons of olive oil</li>
            <li>4 cloves of garlic, minced</li>
            <li>5 cups of fresh spinach leaves</li>
            <li>1 cup of unsweetened almond milk</li>
            <li>2 tablespoons of nutritional yeast (for a cheesy flavor)</li>
            <li>
              1/2 teaspoon of red pepper flakes (adjust to your spice
              preference)
            </li>
            <li>Salt and pepper to taste</li>
            <li>Fresh basil or parsley for garnish (optional)</li>
          </ul>
       
    <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>
              Cook the pasta according to package instructions. Drain and set
              aside.
            </li>
            <li>
              In a large pan, heat the olive oil over medium heat. Add the
              minced garlic and sauté for about 1-2 minutes until fragrant.
            </li>
            <li>
              Add the fresh spinach to the pan and cook until wilted, which
              should take about 3-4 minutes.
            </li>
            <li>
              Pour in the unsweetened almond milk, nutritional yeast, and red
              pepper flakes. Stir well and let the mixture simmer for about 5
              minutes, allowing it to thicken slightly.
            </li>
            <li>Season the sauce with salt and pepper to taste.</li>
            <li>
              Add the cooked pasta to the pan, and gently toss everything
              together until the pasta is coated with the creamy sauce.
            </li>
            <li>Garnish with fresh basil or parsley, if desired.</li>
            <li>
              Serve hot and enjoy your delectable lactose-free creamy garlic and
              spinach penne!
            </li>
          </ol>
          <p>
            <strong>Conclusion</strong>
          </p>
          <p>
            Living a lactose-free lifestyle doesn't mean sacrificing flavor or
            indulgence. With a variety of dairy-free alternatives available, you
            can explore new tastes and create delicious meals that suit your
            dietary needs. So, next time you're craving a creamy pasta dish,
            remember this lactose-free recipe, and enjoy a satisfying,
            dairy-free meal.
          </p>
    </div>
  </div>
)}

{modal2Visible && (
  <div className="modal" onClick={closeModal2}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p>
            <strong>Recipe: Lactose-Free Creamy Tomato Basil Pasta</strong>
          </p>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li>
              8 oz (about 2 cups) gluten-free pasta (or your choice of pasta)
            </li>
            <li>1 tablespoon olive oil</li>
            <li>1 small onion, finely chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>1 can (14 oz) diced tomatoes</li>
            <li>
              1 cup lactose-free plain yogurt (or almond-based yogurt for a
              creamier texture)
            </li>
            <li>1/2 cup fresh basil leaves, chopped</li>
            <li>Salt and pepper to taste</li>
            <li>Red pepper flakes (optional for some heat)</li>
            <li>Dairy-free Parmesan cheese for garnish (optional)</li>
          </ul>
          <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>
              Cook the pasta according to the package instructions until al
              dente. Drain and set aside.
            </li>
            <li>
              In a large pan, heat the olive oil over medium heat. Add the
              chopped onion and garlic, sauté until they become translucent.
            </li>
            <li>
              Add the diced tomatoes (with their juices) to the pan and simmer
              for 5-7 minutes, allowing the flavors to meld together.
            </li>
            <li>
              Stir in the lactose-free yogurt and fresh basil, mixing well. Let
              the sauce simmer for an additional 5 minutes.
            </li>
            <li>
              Season the sauce with salt, pepper, and red pepper flakes (if
              desired). Adjust the seasonings to your taste.
            </li>
            <li>
              Combine the cooked pasta with the creamy tomato basil sauce,
              ensuring the pasta is evenly coated.
            </li>
            <li>
              Serve the Lactose-Free Creamy Tomato Basil Pasta hot, garnished
              with fresh basil leaves and dairy-free Parmesan cheese, if
              desired.
            </li>
          </ol>
          <p>
            <strong>Conclusion:</strong>
          </p>
          <p>
            Lactose intolerance need not be a barrier to enjoying a wide variety
            of delicious meals. With the ever-expanding range of lactose-free
            food products and the recipe we've shared, you can explore new
            flavors and culinary adventures while ensuring your digestive
            comfort. Whether you have lactose intolerance or are simply looking
            to expand your culinary horizons, give this Lactose-Free Creamy
            Tomato Basil Pasta a try, and savor the flavors of a lactose-free
            world.
          </p>
    </div>
  </div>
)}

    </div>
  );
};

export default Section1;
