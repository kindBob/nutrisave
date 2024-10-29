import { useLocation } from "react-router-dom";
import { NotFoundPage } from "../components/NotFoundPage";
import TransitionOverlay from "../components/TransitionOverlay";

export default function RecipePage() {
  const location = useLocation();
  console.log(location.state);
  const { recipe } = location.state || {};

  if (!recipe) return <NotFoundPage />;

  return (
    <div className="section recipe-page">
      <div className="container">
        <h2 className="section-title recipe-page__title">{recipe.Name}</h2>
        <div className="recipe-page__content">
          <img className="recipe-page__image" src={recipe.Image_link} alt="Recipe image" />
          <div className="recipe-page__content-text">
            <h3 className="recipe-page__subtitle section-subtitle">Ingredients</h3>
            <ul className="recipe-page__ingredients list-style-1">
              {Object.keys(recipe.Ingredients).map((key) => (
                <li key={key} className="list-style-1__point">
                  <strong>{key}</strong>: {recipe.Ingredients[key]["Mass"]} -{" "}
                  {recipe.Ingredients[key]["Price"]}
                </li>
              ))}
            </ul>

            <h3 className="recipe-page__subtitle section-subtitle">Preparation</h3>
            <ul className="recipe-page__ingredients list-style-1">
              {Object.keys(recipe.Preparation).map((key) => (
                <li key={key} className="list-style-1__point">
                  <strong>{key}</strong>: {recipe.Preparation[key]}
                </li>
              ))}
            </ul>

            <h3 className="recipe-page__subtitle section-subtitle">Price for 1 serving</h3>
            <h3 className="recipe-page__subtitle section-subtitle price">{recipe.Price}</h3>
          </div>
        </div>
      </div>

      <TransitionOverlay />
    </div>
  );
}
