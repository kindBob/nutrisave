export interface IRecipe {
  id: string;
  Name: string;
  Image_link: string;
  Price: string;
  Ingredients: {
    [key: string]: {
      mass: string;
      price: string;
    };
  };

  Preparation: {
    [key: string]: string;
  };
}

export interface IRecipeProps extends IRecipe {
  key: string;
  onClick: () => void;
}
