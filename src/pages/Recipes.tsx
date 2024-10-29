import TransitionOverlay from "../components/TransitionOverlay";
import RecipeList from "../components/RecipeList";

export default function Recipes() {
  return (
    <div className="section recipes">
      <RecipeList />

      <TransitionOverlay />
    </div>
  );
}
