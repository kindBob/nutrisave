import { useLocation } from "react-router-dom";
import { NotFoundPage } from "../components/NotFoundPage";

export default function RecipePage() {
  const location = useLocation();
  console.log(location.state);
  const { recipe } = location.state || {};

  if (!recipe) return <NotFoundPage />;

  return (
    <div className="section recipe-page">
      <div className="container">
        <img src={recipe.Image_link} alt="altuha" />
      </div>
    </div>
  );
}
