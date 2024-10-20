import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { IRecipe } from "../interfaces";
import Recipe from "../components/Recipe";
import Footer from "../components/Footer";

const testRecipe: IRecipe = {
  Name: "Greek Salad",
  Image_link:
    "https://imgs.search.brave.com/RcrB8hFdtYRNndeMVqrZfzYP-xgNyY8GORARYIuYsn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdhL0dyZWVrX1Nh/bGFkX2Zyb21fVGhl/c3NhbG9uaWtpLmpw/Zw",
  Price: "10",
  Ingredients: {
    penis: "100g",
    biggerPenis: "150g",
  },
};

export default function Recipes() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const recipeList: IRecipe[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          Object.keys(data).forEach((key) => {
            const recipeData = data[key];

            recipeList.push({
              Name: key,
              Image_link: recipeData.Image_link,
              Price: recipeData.Price,
              Ingredients: recipeData.Ingredients,
            });
          });
        });

        setRecipes(recipeList);
      } catch (error) {
        console.log("Error fetching recipes " + error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="section section-2">
      <div className="container">
        <div className="recipes-container">
          {/* {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              Name={recipe.Name}
              Image_link={recipe.Image_link}
              Price={recipe.Price}
              Ingredients={recipe.Ingredients}
            />
          ))} */}
          <Recipe
            Name={testRecipe.Name}
            Image_link={testRecipe.Image_link}
            Price={testRecipe.Price}
            Ingredients={testRecipe.Ingredients}
          />
          <Recipe
            Name={testRecipe.Name}
            Image_link={testRecipe.Image_link}
            Price={testRecipe.Price}
            Ingredients={testRecipe.Ingredients}
          />
          <Recipe
            Name={testRecipe.Name}
            Image_link={testRecipe.Image_link}
            Price={testRecipe.Price}
            Ingredients={testRecipe.Ingredients}
          />
          <Recipe
            Name={testRecipe.Name}
            Image_link={testRecipe.Image_link}
            Price={testRecipe.Price}
            Ingredients={testRecipe.Ingredients}
          />
          <Recipe
            Name={testRecipe.Name}
            Image_link={testRecipe.Image_link}
            Price={testRecipe.Price}
            Ingredients={testRecipe.Ingredients}
          />
          <Recipe
            Name={testRecipe.Name}
            Image_link={testRecipe.Image_link}
            Price={testRecipe.Price}
            Ingredients={testRecipe.Ingredients}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
