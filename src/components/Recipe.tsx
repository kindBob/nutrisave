import { useState } from "react";
import { IRecipeProps } from "../interfaces";

export default function Recipe({ Name, Image_link, Price, onClick }: IRecipeProps) {
  const [isRecipeHovered, setIsRecipeHovered] = useState(false);

  return (
    <div
      className={`recipe__container ${isRecipeHovered ? "--hovered" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsRecipeHovered(true)}
      onMouseLeave={() => setIsRecipeHovered(false)}>
      <div
        className="recipe__image-container"
        style={{ backgroundImage: `url(${Image_link})` }}></div>
      <h3 className="recipe__title">
        <span className="name">{Name}</span> <br /> <span className="price">{Price}€</span>
      </h3>
    </div>
  );
}
