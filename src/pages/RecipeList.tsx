import { useEffect, useState } from "react";
import Recipe from "../components/Recipe";
import { useNavigate } from "react-router-dom";
import { IRecipe } from "../interfaces";
import TransitionOverlay from "../components/TransitionOverlay";

// eslint-disable-next-line react-refresh/only-export-components
export const recipeList = {
  "Buckwheat with Mushrooms": {
    image_link: "https://milkandbun.com/wp-content/uploads/2015/03/kasha-3.jpg",
    ingredients: {
      buckwheat: { mass: "200 g", price: "1,46 €" },
      mushrooms: { mass: "200 g", price: "3,64 €" },
      onion: { mass: "1 piece", price: "0,20 €" },
    },
    preparation: {
      "Cooking the Buckwheat":
        "Rinse the buckwheat and place it in a pot. Add 400 ml of water and a pinch of salt. Cook on low heat with the lid on for about 15-20 minutes until the water is absorbed.",
      "Preparing the Mushrooms":
        "Slice the mushrooms and finely chop the onion. Heat oil in a pan, add the onion, and sauté until translucent (2-3 minutes). Add mushrooms, salt, and pepper, and sauté until the mushrooms are browned (7-10 minutes).",
      Combining:
        "When the buckwheat is ready, mix it with the mushrooms and onion. Season with salt and pepper to taste.",
    },
    price: "5,30 €",
    id: "buckwheat_with_mushrooms",
  },
  "Pasta with Tomatoes": {
    image_link:
      "https://imgs.search.brave.com/GAULjdk3rM95PZ3qp9d-pzzKfPdRSes9VuCUXpg9dCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmlsZ2Fpbi5jb20v/aW1hZ2UvcmVjaXBl/LWNvdmVyL2NvdmVy/LWRlc2t0b3AvdGVz/dG92aW55LXMta3Jl/bW92b3UtcmFqY2F0/b3ZvdS1vbWFja291/LWEtbW96emFyZWxs/b3U_dj0xNjU5OTQz/NDU3",
    ingredients: {
      garlic: { mass: "2 pieces", price: "0,20 €" },
      pasta: { mass: "200 g", price: "1,63 €" },
      tomatoes: { mass: "200 g", price: "0,50 €" },
    },
    preparation: {
      "Cooking Pasta":
        "Cook the pasta in salted water according to the instructions on the package (8-10 minutes) until 'al dente'. Then drain them, but leave about 1/4 cup of the cooking water for the sauce.",
      "Preparation of Tomato Sauce":
        "Cut the tomatoes into cubes. Heat the olive oil in a frying pan and add the finely chopped garlic. Fry for 30 seconds until fragrant. Add the tomatoes, salt, pepper, and herbs to taste. Cook for about 5-7 minutes until the tomatoes are soft and form a sauce.",
      Mix: "Add the pasta to the sauce and stir. If the sauce is too thick, add a little water from cooking. Cook for another 1-2 minutes.",
    },
    price: "2,33 €",
    id: "pasta_with_tomatoes",
  },
  "Potato Soup with Carrots": {
    image_link:
      "https://www.veggieinspired.com/wp-content/uploads/2024/04/red-lentil-potato-soup-featured.jpg",
    ingredients: {
      carrots: { mass: "200 g", price: "0,20 €" },
      onion: { mass: "1 piece", price: "0,20 €" },
      potatoes: { mass: "500 g", price: "0,72 €" },
    },
    preparation: {
      "Preparing the Vegetables":
        "Dice the potatoes, slice the carrots, and finely chop the onion.",
      Sautéing:
        "Heat oil in a pan and sauté the onion until translucent (2-3 minutes). Add the carrots and sauté for another 2-3 minutes.",
      "Cooking the Soup":
        "Pour 1.5 liters of water into a pot and bring it to a boil. Add the potatoes, carrots, onion, salt, pepper, and bay leaf. Cook for 15-20 minutes until the potatoes are soft.",
      "Final Steps": "After cooking, you can add fresh herbs.",
    },
    price: "1,12 €",
    id: "potato_soup_with_carrots",
  },
  "Vegetable Omelet": {
    image_link:
      "https://i.ytimg.com/vi/GXnsFtzSEOI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCAwgI4wfHnx9cQhPj-3FwS214AAg",
    ingredients: {
      "bell pepper": { mass: "200 g", price: "0,24 €" },
      eggs: { mass: "4 pieces", price: "0,88 €" },
      tomatoes: { mass: "2 pieces (200 g)", price: "0,50 €" },
    },
    preparation: {
      "Preparing the Vegetables": "Dice the tomatoes and bell pepper.",
      "Preparing the Eggs": "Beat the eggs in a bowl with a bit of salt and pepper.",
      Sautéing:
        "Heat oil in a pan and add the vegetables. Sauté for 3-5 minutes until softened. Add the eggs and cook on medium heat until the omelette is set (5-7 minutes).",
      Serving: "Serve the omelette hot. You can add fresh herbs.",
    },
    price: "1,31 €",
    id: "vegetable_omelet",
  },
};

export default function RecipeList() {
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const formattedRecipes = Object.entries(recipeList).map(([name, recipe]) => ({
      id: recipe.id,
      Name: name,
      Image_link: recipe.image_link,
      Price: recipe.price,
      Ingredients: recipe.ingredients,
      Preparation: recipe.preparation,
    }));
    setRecipes(formattedRecipes);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const sortedRecipes = [...recipes]
    .filter((recipe) => recipe.Name.toLowerCase().includes(searchQuery))
    .sort((a, b) => {
      a.Price = a.Price.replace(",", ".");
      b.Price = b.Price.replace(",", ".");

      if (sortOption === "price") return parseFloat(a.Price) - parseFloat(b.Price);
      if (sortOption === "alphabet") return a.Name.localeCompare(b.Name);

      return 0;
    });

  const handleRecipeClick = (recipe: IRecipe) => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div className="section recipes">
      <div className="container">
        <div className="controls-container">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select onChange={handleSortChange} value={sortOption}>
            <option value="">Sort By</option>
            <option value="alphabet">Alphabetical</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div className="recipe-list">
          {sortedRecipes.length > 0 ? (
            sortedRecipes.map((recipe) => (
              <Recipe
                key={recipe.id}
                id={recipe.id}
                Name={recipe.Name}
                Image_link={recipe.Image_link}
                Price={recipe.Price}
                Ingredients={recipe.Ingredients}
                Preparation={recipe.Preparation}
                onClick={() => handleRecipeClick(recipe)}
              />
            ))
          ) : (
            <div className="recipes__not-found section-subtitle">No recipes found</div>
          )}
        </div>
      </div>
      <TransitionOverlay />
    </div>
  );
}
