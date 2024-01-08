import React,{useState} from "react";

const section1ContainerStyle = {
  textAlign: "center",
  padding: "20px",
};

const section1HeaderStyle = {
  backgroundColor: "#73A580",
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
        <h1 style={headerStyle}>Vegan Food</h1>
      </header>
      &nbsp;
      <article style={blogPostStyle}>
  <h2 style={h2Style}>Indulge in the vibrant and delectable world of vegan cuisine</h2>

  <p style={pStyle}>
    Welcome to the exciting realm of vegan cuisine, where plant-based flavors take center stage, offering a culinary experience that is not only delicious but also ethically conscious. Dive into a celebration of nature's bounty, bursting with color, texture, and wholesome goodness.
  </p>

  <p style={pStyle}>
    Picture a plate adorned with an array of fresh, crisp vegetables – from vibrant greens like kale and spinach to the rich hues of tomatoes, bell peppers, and carrots. These ingredients come together in a harmonious dance of flavors, offering a symphony of tastes from sweet to savory and everything in between.
  </p>

  <p style={pStyle}>
    Explore the variety of grains that form the backbone of vegan meals. Quinoa, brown rice, and farro provide a hearty base, while lentils and beans add protein-packed goodness. Tantalizing spices and herbs elevate each dish, with aromatic cumin, coriander, and turmeric infusing warmth, and fresh basil, cilantro, and mint lending a burst of freshness.
  </p>

  <p style={pStyle}>
    Indulge in the creativity of plant-based chefs who transform familiar favorites into vegan delights. Savor the satisfaction of a juicy plant-based burger, adorned with avocado, crisp lettuce, and a smear of tangy vegan aioli. Or delight in the comforting embrace of a bowl of creamy coconut milk-infused curry, brimming with an assortment of vegetables and tofu.
  </p>

  <p style={pStyle}>
    Desserts in the vegan realm are a revelation. Decadent chocolate avocado mousse, fruit-infused sorbets, and nut-based cheesecakes redefine the boundaries of sweet indulgence without compromising on flavor or texture.
  </p>

  <p style={pStyle}>
    Beyond the plate, vegan food represents a commitment to sustainability and compassion. By choosing plant-based options, you contribute to a more eco-friendly and cruelty-free way of dining. Whether you're a committed vegan or simply exploring the world of plant-based eating, the diversity, and deliciousness of vegan cuisine are sure to captivate your taste buds and leave you with a newfound appreciation for the abundance that nature provides.
  </p>
</article>

      <div style={section1ContentStyle}>
        <article style={blogPostStyle}>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vegan Italian Cuisine"
            style={imageStyle}
            onClick={openModal1}

          />
          <h2 style={h2Style}>Exploring Vegan Italian Cuisine</h2>
          <p style={pStyle}>
            Title: Exploring Vegan Italian Cuisine: A Taste of Italy, Plant-Based Style
          </p>
          <p style={pStyle}>
            Introduction: Italian cuisine is celebrated worldwide for its rich, comforting, and hearty dishes. While many traditional Italian recipes heavily feature meat and dairy, you'll be delighted to know that you can savor the authentic flavors of Italy while adhering to a vegan diet. In this blog, we'll embark on a culinary journey through the vibrant world of vegan Italian cuisine, and we'll even share a delectable recipe for a classic dish made entirely plant-based.
          </p>
          <p style={pStyle}>
            <strong>Vegan Italian Staples</strong>
          </p>
          <p style={pStyle}>
            Before we dive into the recipe, let's take a look at some vegan substitutes for Italian cuisine staples:
          </p>
          <ul>
            <li style={{color: 'white'}}>Pasta: Most dried pasta is naturally vegan, just make sure to check the ingredients for any hidden animal-derived products.</li>
            <li style={{color: 'white'}}>Tomato Sauce: Marinara, arrabbiata, and pomodoro sauces are typically vegan. Double-check the label to be sure, as some varieties may contain cheese.</li>
            <li style={{color: 'white'}}>Olive Oil: Extra virgin olive oil is a key ingredient in Italian cooking and is entirely plant-based.</li>
            <li style={{color: 'white'}}>Herbs and Spices: Italian cuisine is known for its generous use of herbs like basil, oregano, and rosemary, along with spices like garlic and red pepper flakes.</li>
            <li style={{color: 'white'}}>Vegetables: Italy offers an abundance of fresh, seasonal vegetables that can shine in vegan dishes.</li>
            <li style={{color: 'white'}}>Vegan Cheese: Look for dairy-free alternatives like vegan mozzarella or parmesan to add a cheesy touch to your dishes.</li>
          </ul>
        
        </article>
        <article style={blogPostStyle}>
  <img
            src="https://media.istockphoto.com/id/594472840/photo/vegetable-on-the-table.jpg?s=1024x1024&w=is&k=20&c=apgIdmrTLscQtXvop2T_bSGV4CCIBuGptBt2A-DqKxs="
            alt="Vegan Sushi: A Delicious Alternative"
    style={imageStyle}
    onClick={openModal2}

  />
  <h2 style={h2Style}>Vegan Sushi: A Delicious Alternative</h2>
  <p style={pStyle}>
    Sushi is a beloved Japanese dish that has gained immense popularity worldwide. Traditionally made with fish and seafood, it might seem like sushi isn't an option for vegans. However, the beauty of vegan cuisine lies in its creativity and adaptability. With a little ingenuity and the right ingredients, you can enjoy the flavors and textures of sushi while keeping it entirely plant-based. In this blog, we'll explore the world of vegan sushi and provide a delicious recipe to get you started.
  </p>
  <p style={pStyle}><strong>The Basics of Vegan Sushi</strong></p>
  <p style={pStyle}>
    Vegan sushi doesn't rely on fish or seafood to create its signature flavors. Instead, it focuses on fresh vegetables, plant-based proteins, and unique combinations of ingredients. Here are some key elements to consider when making vegan sushi:
  </p>
  <ul style={{color: 'white'}}>
    <li>Nori Seaweed: Nori sheets are essential for rolling sushi. They add a subtle ocean flavor and help bind everything together.</li>
    <li>Sushi Rice: Sushi rice is the sticky rice used in traditional sushi. It's seasoned with rice vinegar, sugar, and salt for a tangy, slightly sweet taste.</li>
    <li>Fresh Vegetables: Use a variety of fresh and crisp vegetables like cucumber, avocado, bell peppers, carrots, and scallions to provide texture and flavor.</li>
    <li>Vegan Protein: Tofu, tempeh, and marinated mushrooms are excellent protein choices for vegan sushi.</li>
    <li>Vegan Sauces: Traditional soy sauce can be replaced with tamari or coconut aminos for a gluten-free alternative. You can also make vegan spicy mayo using vegan mayonnaise and Sriracha sauce.</li>
  </ul>
  
</article>

<article style={blogPostStyle}>
  <img
src="https://media.istockphoto.com/id/1472311667/photo/fruit-salad-on-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=G8tdNg_KDMoimMUZYl7g8VeRzDdMa60pga372rpfYo0="
alt="Indulge in Vegan Desserts: Satisfy Your Sweet Tooth with a Plant-Based Twist"
    style={imageStyle}
    onClick={openModal3}

  />
  <h2 style={h2Style}>Indulge in Vegan Desserts: Satisfy Your Sweet Tooth with a Plant-Based Twist</h2>
  <p style={pStyle}>
    In recent years, the vegan lifestyle has gained immense popularity, and it's not hard to see why. People are becoming increasingly conscious of the impact their food choices have on the environment and animal welfare. While many might think that adopting a vegan diet means giving up on their favorite sweet treats, the truth is quite the opposite. Vegan desserts can be just as indulgent, delicious, and satisfying as their non-vegan counterparts. In this blog, we'll explore the world of vegan desserts and provide a mouthwatering recipe for Vegan Chocolate Avocado Mousse.
  </p>
  <p style={pStyle}><strong>Why Choose Vegan Desserts?</strong></p>
  <ol style={{color: 'white'}}>
    <li><strong>Health Benefits:</strong> Vegan desserts are often lower in saturated fats and cholesterol, making them a healthier option for your heart. They are also rich in essential nutrients, such as fiber, vitamins, and antioxidants.</li>
    <li><strong>Ethical Considerations:</strong> By choosing vegan desserts, you can enjoy your sweet indulgences guilt-free, knowing that no animals were harmed in the process.</li>
    <li><strong>Environmental Impact:</strong> The production of vegan desserts generally has a lower carbon footprint compared to traditional dairy-based treats, contributing to a more sustainable planet.</li>
  </ol>
 

</article>
      </div>


      {modal1Visible && (
  <div className="modal" onClick={closeModal1}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p>
            <strong>Vegan Italian Recipe: Eggplant Parmesan</strong>
          </p>
          <p>
            Eggplant Parmesan, or "Melanzane alla Parmigiana," is a classic Italian dish that's both comforting and flavorful. This vegan version replaces traditional mozzarella and Parmesan cheese with dairy-free alternatives while retaining the mouthwatering essence of the original.
          </p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li>2 large eggplants, sliced into 1/2-inch rounds</li>
            <li>1 cup all-purpose flour (or gluten-free flour)</li>
            <li>1 cup plant-based milk (almond, soy, oat, etc.)</li>
            <li>2 cups bread crumbs (use gluten-free if needed)</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>1 teaspoon garlic powder</li>
            <li>Salt and pepper to taste</li>
            <li>Olive oil for frying</li>
            <li>2 cups marinara sauce (store-bought or homemade)</li>
            <li>1 cup vegan mozzarella cheese (shredded)</li>
            <li>1/2 cup vegan parmesan cheese (grated)</li>
            <li>Fresh basil leaves for garnish</li>
          </ul>
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Preheat your oven to 375°F (190°C).</li>
            <li>Start by setting up a breading station. In one bowl, place the flour. In another bowl, whisk together the plant-based milk, oregano, basil, garlic powder, salt, and pepper. In a third bowl, combine the bread crumbs with a pinch of salt and pepper.</li>
            <li>Dredge each eggplant slice in the flour, then dip it into the milk mixture, and finally coat it with the bread crumbs. Ensure each slice is well-coated and place them on a baking sheet.</li>
            <li>Heat some olive oil in a large skillet over medium heat. Once hot, add the breaded eggplant slices and cook until they are golden brown on both sides. You may need to do this in batches.</li>
            <li>In a separate ovenproof dish, spread a thin layer of marinara sauce. Place the cooked eggplant slices on top of the sauce, then add a layer of vegan mozzarella and vegan parmesan. Repeat this layering process until all the ingredients are used.</li>
            <li>Bake in the preheated oven for about 25-30 minutes or until the cheese is bubbly and slightly browned.</li>
            <li>Garnish with fresh basil leaves before serving.</li>
          </ol>

    </div>
  </div>
)}

{modal2Visible && (
  <div className="modal" onClick={closeModal2}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p><strong>Vegan Sushi Recipe: Avocado and Mango Sushi Rolls</strong></p>
  <p>Let's get started with a delicious vegan sushi recipe that combines the creaminess of avocado with the sweetness of mango for a refreshing and satisfying roll.</p>
  <p><strong>Ingredients:</strong></p>
  <ul>
    <li>For the Sushi Rice:
      <ul>
        <li>1 cup sushi rice</li>
        <li>2 cups water</li>
        <li>2 tablespoons rice vinegar</li>
        <li>1 tablespoon sugar</li>
        <li>1 teaspoon salt</li>
      </ul>
    </li>
    <li>For the Avocado and Mango Filling:
      <ul>
        <li>1 ripe avocado, sliced</li>
        <li>1 ripe mango, sliced</li>
        <li>1 cucumber, julienned</li>
        <li>4 nori sheets</li>
        <li>Soy sauce, tamari, or coconut aminos for dipping</li>
        <li>Pickled ginger and wasabi (optional, for serving)</li>
      </ul>
    </li>
  </ul>
  <p><strong>Instructions:</strong></p>
  <ol>
    <li>Rinse the sushi rice under cold water until the water runs clear. Cook the rice according to the package instructions. Once cooked, transfer the rice to a large bowl and let it cool slightly.</li>
    <li>In a small saucepan, combine the rice vinegar, sugar, and salt. Heat over low heat until the sugar and salt dissolve. Pour the vinegar mixture over the cooked rice and gently fold it in with a wooden spatula to evenly coat the rice. Let the rice cool to room temperature.</li>
    <li>Lay a bamboo sushi rolling mat on a clean, flat surface. Place a sheet of plastic wrap on top of the mat.</li>
    <li>Lay one nori sheet, shiny side down, on the plastic wrap. Wet your fingers and take a handful of sushi rice, spreading it evenly over the nori sheet, leaving about 1 inch at the top without rice.</li>
    <li>Arrange the avocado, mango, and cucumber strips in the center of the rice.</li>
    <li>Gently lift the edge of the bamboo mat closest to you and start rolling the sushi away from you, tucking in the filling as you go. Use a little water on the nori to seal the roll.</li>
    <li>Once you've rolled it completely, use a sharp, wet knife to slice the sushi roll into bite-sized pieces.</li>
    <li>Serve your avocado and mango sushi rolls with soy sauce, pickled ginger, and wasabi.</li>
  </ol>    </div>
  </div>
)}
{modal3Visible && (
  <div className="modal" onClick={closeModal3}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <p><strong>Recipe: Vegan Chocolate Avocado Mousse</strong></p>

    <p>This creamy and decadent dessert will change your perception of avocados forever. It's a rich and satisfying chocolate mousse that's entirely plant-based.</p>
  <p><strong>Ingredients:</strong></p>
  <ul>
    <li>2 ripe avocados</li>
    <li>1/3 cup unsweetened cocoa powder</li>
    <li>1/4 cup maple syrup (adjust to taste)</li>
    <li>1 tsp vanilla extract</li>
    <li>A pinch of salt</li>
    <li>1/4 cup plant-based milk (e.g., almond, soy, or oat)</li>
    <li>Vegan dark chocolate shavings or berries for garnish (optional)</li>
  </ul>
  <p><strong>Instructions:</strong></p>
  <ol>
    <li>Cut the avocados in half, remove the pit, and scoop the flesh into a blender or food processor.</li>
    <li>Add the cocoa powder, maple syrup, vanilla extract, and a pinch of salt to the blender.</li>
    <li>Start blending, and while the mixture is blending, gradually add the plant-based milk. Continue blending until the mixture is smooth and creamy. Scrape down the sides of the blender if needed.</li>
    <li>Taste the mousse and adjust the sweetness with more maple syrup if desired.</li>
    <li>Once the mousse is smooth and sweetened to your liking, divide it into serving dishes.</li>
    <li>Chill in the refrigerator for at least 30 minutes to let the flavors meld and the mousse thicken.</li>
    <li>Before serving, garnish with vegan dark chocolate shavings or fresh berries if desired.</li>
    <li>Enjoy your velvety Vegan Chocolate Avocado Mousse!</li>
  </ol>
  <p>
    Vegan desserts have come a long way, and there's no reason to sacrifice taste and texture when opting for plant-based treats. With a little creativity and the right ingredients, you can indulge in sweet pleasures while supporting a more ethical and environmentally-friendly food system. This Vegan Chocolate Avocado Mousse is just one example of the delectable vegan desserts you can enjoy. Give it a try and discover the wonderful world of vegan sweets for yourself!
  </p>
    </div>
  </div>
)}
    </div>
  );
};

export default Section1;
