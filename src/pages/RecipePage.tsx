import { Link, useLocation } from "react-router-dom";
import { NotFoundPage } from "../components/NotFoundPage";
import TransitionOverlay from "../components/TransitionOverlay";

export default function RecipePage() {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe) return <NotFoundPage />;

  return (
    <div className="section recipe-page">
      <div className="container">
        <div className="recipe-page__exit-btn__wrapper">
          <Link className="recipe-page__exit-btn__container" to={"/recipes"}>
            <div className="recipe-page__exit-btn">
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
        <h2 className="section-title recipe-page__title">{recipe.Name}</h2>

        <div className="recipe-page__content">
          <div
            className="recipe-page__image-container"
            style={{ backgroundImage: `url(${recipe.Image_link})` }}></div>
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
            <h3 className="recipe-page__subtitle section-subtitle price">{recipe.Price} €</h3>
          </div>
        </div>
      </div>

      <TransitionOverlay />
    </div>
  );
}
