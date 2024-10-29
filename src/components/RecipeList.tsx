import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { useNavigate } from "react-router-dom";
import { IRecipe } from "../interfaces";

export default function RecipeList() {
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const sortedRecipes = [...recipes]
    .filter((recipe) => recipe.Name.toLowerCase().includes(searchQuery))
    .sort((a, b) => {
      if (sortOption === "price") return +a.Price - +b.Price;
      if (sortOption === "alphabet") return a.Name.localeCompare(b.Name);
      return 0;
    });

  const handleRecipeClick = (recipe: IRecipe) => {
    navigate(`/recipes/${recipe.id}`, { state: { recipe } });
  };

  return (
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
        {sortedRecipes.map((recipe) => (
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
        ))}
      </div>
    </div>
  );
}
