export interface IRecipe {
  Name: string;
  Image_link: string;
  Price: string;
  Ingredients: {
    [key: string]: string;
  };
}
