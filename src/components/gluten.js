import React,{useState} from "react";

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
  margin: "10px 0", // Add margin to the top and bottom
  color: "white",
};

const pStyle1 = {
  color: "black",
};

const listStyle1 = {
  color: "black",
};
const liststyle = {
  color : "white",
}

const readMoreLinkStyle = {
  display: "inline-block",
  color: "#ff5733",
  textDecoration: "none",
  fontWeight: "600",
  marginTop: "10px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  marginBottom: "10px", // Add margin to the bottom
};

const Section1 = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);


  const openModal1 = () => setModal1Visible(true);
  const closeModal1 = () => setModal1Visible(false);

  const openModal2 = () => setModal2Visible(true);
  const closeModal2 = () => setModal2Visible(false);
  
  const openModal3 = () => setModal3Visible(true);
  const closeModal3 = () => setModal3Visible(false);
  return (
    <div style={section1ContainerStyle}>
      <header style={section1HeaderStyle}>
        <h1 style={headerStyle}>Gluten Free Food</h1>
      </header>&nbsp;
      <article style={blogPostStyle}>
          <h2 style={h2Style}>
        Gluten Free Food
          </h2>
          <p style={pStyle}>
          Gluten is a mixture of proteins found in wheat and related grains like barley and rye.
          &nbsp; <br></br> It provides elasticity to dough, contributing to the structure of baked goods.<br></br> While gluten is a staple in many diets and widely consumed, some individuals may have gluten-related disorders, such as celiac disease or non-celiac gluten sensitivity.<br></br> In these cases, the ingestion of gluten can lead to various health issues.<br></br><br></br> As a result, gluten-free diets have gained popularity, with a growing market of gluten-free products catering to those with gluten sensitivities. However, it's important to note that for the majority of people, gluten-containing foods are a safe and nutritious part of a balanced diet.  </p>
       

        </article>
      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1521146250551-a5578dcc2e64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Exploring Italian Cuisine: A Culinary Journey Through the Flavors of Italy"
            style={imageStyle}
            onClick={openModal1}

          />
          <h2 style={h2Style}>
            Exploring Italian Cuisine: A Culinary Journey Through the Flavors of
            Italy
          </h2>
          <p style={pStyle}>
            Italian cuisine is celebrated around the world for its rich and
            diverse flavors, and it has a long history deeply rooted in
            tradition. From the northern regions of Lombardy and Piedmont to the
            southern regions of Sicily and Calabria, each part of Italy has its
            own unique culinary identity. In this blog, we'll take you on a
            journey through the tantalizing world of Italian cuisine, and we'll
            even provide you with a recipe to try at home.
          </p>
          <p style={pStyle}>
            <strong>The Essence of Italian Cuisine:</strong>
          </p>
          <p style={pStyle}>
            Italian cuisine is known for its simplicity and focus on fresh,
            high-quality ingredients. Olive oil, garlic, fresh herbs, tomatoes,
            and a variety of cheeses are the staples that form the backbone of
            Italian cooking. Many Italian dishes are characterized by their
            regional origins, making it a diverse and exciting cuisine to
            explore. Here are a few iconic Italian dishes that you may have
            heard of:
          </p>
          <ul>
            <li style={liststyle}>
              <strong>Pasta Carbonara:</strong> Hailing from Rome, this creamy
              pasta dish is made with eggs, cheese, pancetta, and #a09d32 pepper.
            </li>
            <li style={liststyle}>
              <strong>Margherita Pizza:</strong> Naples is the birthplace of
              pizza, and the Margherita is a classic example with tomatoes,
              mozzarella, basil, and olive oil.
            </li>
            <li style={liststyle}>
              <strong>Risotto:</strong> Northern Italy's specialty, risotto, is
              a creamy rice dish that can be prepared in various ways, often
              incorporating mushrooms, saffron, or seafood.
            </li>
            <li style={liststyle}>
              <strong>Tiramisu:</strong> This beloved dessert originates from
              Veneto and combines layers of coffee-soaked ladyfingers with
              mascarpone cheese and cocoa.
            </li>
            <li style={liststyle}>
              <strong>Osso Buco:</strong> Milan offers this flavorful dish
              featuring braised veal shanks cooked with white wine, broth, and
              gremolata (a mixture of lemon zest, garlic, and parsley).
            </li>
          </ul>
         
        </article>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1498654364264-5e856b6bb047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M38fGdsdXRlbiUyMGZyZWUlMjBmb29kfGVufDB8fDB8fHww"
            alt="Sushi: The Art of Japanese Cuisine"
            style={imageStyle}
            onClick={openModal2}

          />
          <h2 style={h2Style}>Sushi: The Art of Japanese Cuisine</h2>
          <p style={pStyle}>
            Sushi, often considered the epitome of Japanese cuisine, is not just
            a meal; it's an art form that has evolved over centuries. This
            delicate and delectable dish has captured the hearts and palates of
            people worldwide. Sushi combines the flavors of vinegared rice,
            fresh seafood, and a touch of wasabi and soy sauce, creating a
            symphony of taste and texture. In this blog, we'll explore the
            history and art of Japanese sushi and provide a step-by-step recipe
            for making a classic and delicious sushi roll: the California Roll.
          </p>
          <p style={pStyle}>
            <strong>History of Sushi:</strong>
          </p>
          <p style={pStyle}>
            Sushi's roots can be traced back to ancient Southeast Asia, where
            people preserved fish and rice by fermenting them together. Over
            time, the technique evolved, and different regional variations
            emerged. In Japan, sushi underwent further development, with the
            creation of Nigiri Sushi in the early 19th century, consisting of
            vinegared rice topped with various ingredients. In the 20th century,
            the introduction of the sushi roll marked a significant turning
            point in sushi's history, making it more accessible and appealing to
            a global audience.
          </p>
          <p style={pStyle}>
            <strong>The Art of Sushi Making:</strong>
          </p>
          <p style={pStyle}>
            Sushi-making is an intricate craft that demands precision and
            dedication. Here are some key elements that make sushi an art:
          </p>
          <ul>
            <li style={liststyle}>
              <strong>Freshness:</strong> Sushi relies heavily on the quality
              and freshness of its ingredients, particularly seafood. Sushi
              chefs select the finest cuts to ensure a delightful dining
              experience.
            </li>
            <li style={liststyle}>
              <strong>Rice Perfection:</strong> The rice used in sushi is
              short-grain and is seasoned with a mixture of rice vinegar, sugar,
              and salt. Achieving the right balance of stickiness and texture is
              crucial.
            </li>
            <li style={liststyle}>
              <strong>Knife Skills:</strong> Sushi chefs spend years honing
              their knife skills to slice fish, vegetables, and other
              ingredients with precision and finesse.
            </li>
            <li style={liststyle}>
              <strong>Presentation:</strong> Sushi is as much about visual
              appeal as it is about taste. The presentation is artful and
              aesthetically pleasing, often reflecting the seasons and nature.
            </li>
          </ul>
        
        </article>

        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1443808709349-353c8b390400?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthy Eating: A Balanced Diet"
            style={imageStyle}
            onClick={openModal3}
          />
          <h2 style={h2Style}>Healthy Eating: A Balanced Diet</h2>
          <p style={pStyle}>
            Maintaining a balanced diet is key to achieving optimal health and
            well-being. A well-rounded diet ensures that your body receives the
            essential nutrients it needs to function efficiently and support
            your overall health. In this blog, we'll explore the importance of a
            balanced diet and provide you with a delicious and nutritious recipe
            to help you get started on your journey to healthy eating.
          </p>
          <p style={pStyle}>
            <strong>The Importance of a Balanced Diet:</strong>
          </p>
          <p style={pStyle}>
            A balanced diet is one that includes a variety of foods from all
            food groups in the right proportions. These food groups typically
            include fruits, vegetables, grains, proteins, and dairy (or dairy
            alternatives). Here's why maintaining a balanced diet is so
            important:
          </p>
          <ul>
            <li style={liststyle}>
              <strong>Nutrient Intake:</strong> A balanced diet provides your
              body with a wide range of essential nutrients, including vitamins,
              minerals, carbohydrates, proteins, and healthy fats. These
              nutrients are necessary for maintaining bodily functions and
              supporting growth and repair.
            </li>
            <li style={liststyle}>
              <strong>Energy Levels:</strong> Consuming a balanced diet ensures
              that your body has a steady source of energy throughout the day.
              The right combination of nutrients helps you avoid energy spikes
              and crashes.
            </li>
            <li style={liststyle}>
              <strong>Weight Management:</strong> Eating a variety of
              nutrient-rich foods helps you manage your weight more effectively.
              It prevents overconsumption of calorie-dense, low-nutrient foods.
            </li>
            <li style={liststyle}>
              <strong>Disease Prevention:</strong> A balanced diet can reduce
              the risk of chronic diseases, such as heart disease, diabetes, and
              certain types of cancer.
            </li>
            <li style={liststyle}>
              <strong>Gut Health:</strong> Consuming a variety of foods,
              particularly high-fiber fruits and vegetables, can improve your
              gut health and promote a balanced microbiome.
            </li>
          </ul>
        
        </article>
      </div>

           {/* Modal for the first article */}
           {modal1Visible && (
        <div className="modal" onClick={closeModal1}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p style={pStyle1}>
            <strong>Recipe: Spaghetti Aglio e Olio</strong>
          </p>
          <p style={pStyle1}>
            Let's dive into the world of Italian cuisine with a simple and
            delicious recipe that's easy to make at home: Spaghetti Aglio e
            Olio. This dish hails from Naples and showcases the beauty of
            minimalism and quality ingredients.
          </p>
          <p style={pStyle1}>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li style={listStyle1}>8 oz (225g) of spaghetti</li>
            <li style={listStyle1}>4-6 cloves of garlic, thinly sliced</li>
            <li style={listStyle1}>1/2 cup (120ml) extra virgin olive oil</li>
            <li style={listStyle1}>1/4 tsp red pepper flakes (adjust to taste)</li>
            <li style={listStyle1}>Salt and #a09d32 pepper to taste</li>
            <li style={listStyle1}>Freshly chopped Italian parsley</li>
            <li style={listStyle1}>Grated Pecorino Romano or Parmesan cheese (optional)</li>
          </ul>
          <p style={pStyle1}>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li style={listStyle1}>
              Bring a large pot of salted water to a boil. Cook the spaghetti
              according to the package instructions until al dente. Reserve a
              cup of pasta cooking water, then drain the spaghetti.
            </li>
            <li style={listStyle1}>
              While the pasta is cooking, heat the olive oil in a large skillet
              over low heat. Add the sliced garlic and red pepper flakes. Cook
              the garlic gently, ensuring it doesn't brown, for about 3-4
              minutes.
            </li>
            <li style={listStyle1}>
              Add the cooked and drained spaghetti to the skillet with the
              garlic-infused oil. Toss the spaghetti to coat it evenly with the
              oil. If it seems too dry, add some of the reserved pasta cooking
              water to create a silky sauce.
            </li>
            <li style={listStyle1}>
              Season with salt and #a09d32 pepper to taste. Continue to cook and
              toss for another 1-2 minutes until the spaghetti is well-coated.
            </li>
            <li style={listStyle1}>
              Serve the spaghetti aglio e olio on plates, garnished with freshly
              chopped Italian parsley and grated cheese if desired.
            </li>
          </ol>
          <p style={pStyle1}>
            This dish is a celebration of the simplicity and bold flavors that
            make Italian cuisine so beloved. The key to success is using
            high-quality ingredients and achieving the perfect balance of
            garlic, olive oil, and heat from the red pepper flakes.
          </p>
          <p style={pStyle1}>
            <strong>Conclusion:</strong>
          </p>
          <p style={pStyle1}>
            Italian cuisine is a culinary treasure trove that offers something
            for everyone, from pasta lovers to pizza enthusiasts and dessert
            connoisseurs. Whether you're exploring regional specialties or
            making classic dishes like Spaghetti Aglio e Olio, the heart of
            Italian cooking lies in its emphasis on fresh, seasonal ingredients
            and the art of simplicity. Buon appetito!
          </p>          </div>
        </div>
      )}

      {/* Modal for the second article */}
      {modal2Visible && (
        <div className="modal" onClick={closeModal2}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p style={pStyle1}>
            <strong>California Roll Recipe:</strong>
          </p>
          <p style={pStyle1}>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li style={listStyle1}>1 cup sushi rice (short-grain rice)</li>
            <li style={listStyle1}>2 sheets of nori (seaweed)</li>
            <li style={listStyle1}>1/2 avocado, thinly sliced</li>
            <li style={listStyle1}>1/2 cucumber, julienned</li>
            <li style={listStyle1}>4 crab sticks (imitation crab meat)</li>
            <li style={listStyle1}>Sesame seeds</li>
            <li style={listStyle1}>Soy sauce, pickled ginger, and wasabi for serving</li>
          </ul>
          <p style={pStyle1}>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li style={listStyle1}>
              Prepare the sushi rice by washing it several times until the water
              runs clear. Cook the rice according to the package instructions.
              While it's still warm, season it with a mixture of rice vinegar,
              sugar, and salt. Allow the rice to cool to room temperature.
            </li>
            <li style={listStyle1}>
              Place a bamboo sushi rolling mat on a clean surface, and cover it
              with plastic wrap. Lay a sheet of nori, shiny side down, on the
              mat.
            </li>
            <li style={listStyle1}>
              Wet your hands to prevent the rice from sticking, and then take
              half of the prepared sushi rice and spread it evenly over the
              nori, leaving about half an inch of nori exposed at the top edge.
            </li>
            <li style={listStyle1}>Sprinkle sesame seeds over the rice.</li>
            <li style={listStyle1}>
              Place half of the avocado, cucumber, and crab sticks horizontally
              across the center of the rice.
            </li>
            <li style={listStyle1}>
              Carefully lift the edge of the bamboo mat and roll the nori over
              the fillings, tucking them in tightly. Continue rolling, applying
              gentle pressure to shape the roll.
            </li>
            <li style={listStyle1}>
              Moisten the exposed edge of the nori with water and seal the roll.
            </li>
            <li style={listStyle1}>
              Use a sharp, damp knife to cut the California Roll into bite-sized
              pieces. Clean the knife between cuts to ensure clean edges.
            </li>
            <li style={listStyle1}>
              Serve your California Roll with soy sauce, pickled ginger, and
              wasabi.
            </li>
          </ol>
          <p style={pStyle1}>
            <strong>Conclusion:</strong>
          </p>
          <p style={pStyle1}>
            Sushi is more than just a meal; it's an art form that celebrates
            Japanese culture, craftsmanship, and culinary excellence. The
            California Roll is a wonderful entry point for those new to
            sushi-making, as it combines the fundamentals of sushi construction
            with a delicious fusion of flavors. So, channel your inner sushi
            chef, and embark on a culinary journey into the world of Japanese
            cuisine. Enjoy your homemade California Roll, and explore the
            infinite possibilities that sushi has to offer.
          </p>          </div>
        </div>
      )}
            {/* Modal for the second article */}
            {modal3Visible && (
        <div className="modal" onClick={closeModal3}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p style={pStyle1}>
            <strong>Recipe: Quinoa and Vegetable Stir-Fry</strong>
          </p>
          <p style={pStyle1}>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li style={listStyle1}>1 cup quinoa (uncooked)</li>
            <li style={listStyle1}>2 cups water</li>
            <li style={listStyle1}>2 tablespoons olive oil</li>
            <li style={listStyle1}>1 onion, diced</li>
            <li style={listStyle1}>2 cloves garlic, minced</li>
            <li style={listStyle1}>1 bell pepper, sliced</li>
            <li style={listStyle1}>1 zucchini, sliced</li>
            <li style={listStyle1}>1 carrot, sliced</li>
            <li style={listStyle1}>1 cup broccoli florets</li>
            <li style={listStyle1}>1 cup snap peas</li>
            <li style={listStyle1}>1/4 cup low-sodium soy sauce or tamari</li>
            <li style={listStyle1}>1 tablespoon honey or maple syrup (for sweetness)</li>
            <li style={listStyle1}>1 teaspoon grated ginger</li>
            <li style={listStyle1}>
              1/4 teaspoon red pepper flakes (adjust to your spice preference)
            </li>
            <li style={listStyle1}>1 cup tofu or chicken (optional), cubed</li>
            <li style={listStyle1}>Salt and pepper to taste</li>
          </ul>
          <p style={pStyle1}>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li style={listStyle1}>
              Rinse the quinoa thoroughly under cold water. In a medium-sized
              saucepan, combine the quinoa and water. Bring it to a boil, then
              reduce the heat, cover, and simmer for about 15 minutes, or until
              the quinoa is cooked and the water is absorbed. Set it aside.
            </li>
            <li style={listStyle1}>
              In a large skillet or wok, heat the olive oil over medium-high
              heat. Add the onion and garlic and sauté until they become
              fragrant and slightly browned.
            </li>
            <li style={listStyle1}>
              Add the bell pepper, zucchini, carrot, broccoli, and snap peas to
              the skillet. Stir-fry for about 5-7 minutes until the vegetables
              are tender but still crisp.
            </li>
            <li style={listStyle1}>
              In a small bowl, whisk together the soy sauce (or tamari), honey
              (or maple syrup), ginger, and red pepper flakes. Pour this sauce
              over the stir-fried vegetables.
            </li>
            <li style={listStyle1}>
              If you're adding tofu or chicken, push the vegetables to one side
              of the skillet and add the cubed protein to the other side. Cook
              until it's heated through or until the chicken is no longer pink
              in the center.
            </li>
            <li style={listStyle1}>
              Combine the cooked quinoa with the vegetable mixture and toss
              everything together. Season with salt and pepper to taste.
            </li>
            <li style={listStyle1}>
              Serve your delicious quinoa and vegetable stir-fry hot, garnished
              with fresh herbs, if desired.
            </li>
          </ol>
          <p style={pStyle1}>
            <strong>Conclusion:</strong>
          </p>
          <p style={pStyle1}>
            Eating a balanced diet is a cornerstone of good health, and it
            doesn't have to be boring or tasteless. This quinoa and vegetable
            stir-fry recipe is not only packed with nutrients but also bursting
            with flavor. By incorporating more balanced meals like this into
            your diet, you'll be well on your way to better health and
            well-being. Enjoy your journey to healthy eating!
          </p>          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
