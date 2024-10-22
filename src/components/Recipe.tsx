import { IRecipeProps } from "../interfaces";

export default function Recipe({ Name, Image_link, Price, onClick }: IRecipeProps) {
  return (
    <div className="recipe__container" onClick={onClick}>
      <div
        className="recipe__image-container"
        style={{ backgroundImage: `url(${Image_link})` }}></div>
      <h3 className="recipe__title">
        <span className="name">{Name}</span> <br /> <span className="price">{Price}€</span>
      </h3>
    </div>
  );
}
