import { motion } from "framer-motion";
import { IRecipe } from "../interfaces";

export default function Recipe({ Name, Image_link }: IRecipe) {
  return (
    <div className="recipe__container">
      <div
        className="recipe__image-container"
        style={{ backgroundImage: `url(${Image_link})` }}></div>
      <h3 className="recipe__name">Indian soup</h3>
    </div>
  );
}
