import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { IRecipe } from "../interfaces";
import Recipe from "../components/Recipe";
import TransitionOverlay from "../components/TransitionOverlay";
import { useNavigate } from "react-router-dom";

// const testRecipe: IRecipe = {
//   Name: "Greek Salad",
//   Image_link:
//     "https://imgs.search.brave.com/RcrB8hFdtYRNndeMVqrZfzYP-xgNyY8GORARYIuYsn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdhL0dyZWVrX1Nh/bGFkX2Zyb21fVGhl/c3NhbG9uaWtpLmpw/Zw",
//   Price: "10",
//   Ingredients: {
//     penis: "100g",
//     biggerPenis: "150g",
//   },
// };

export default function Recipes() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const handleRecipeClick = (recipe: IRecipe) => {
    navigate(`/recipes/${recipe.id}`, { state: { recipe } });
  };

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
              id: recipeData.id,
              Name: key,
              Image_link: recipeData.Image_link,
              Price: recipeData.Price,
              Ingredients: recipeData.Ingredients,
              Preparation: recipeData.Preparation,
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
    <div className="section recipes">
      <div className="container">
        {recipes.map((recipe) => (
          <Recipe
            key={Math.random() * 10000}
            id={recipe.id}
            Name={recipe.Name}
            Image_link={recipe.Image_link}
            Price={recipe.Price}
            Ingredients={recipe.Ingredients}
            Preparation={recipe.Preparation}
            onClick={() => handleRecipeClick(recipe)}
          />
        ))}
      </div>

      <TransitionOverlay />
    </div>
  );
}
