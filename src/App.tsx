import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import About from "./pages/About";
import RecipePage from "./pages/RecipePage";
import { NotFoundPage } from "./components/NotFoundPage";
import RecipeList from "./pages/RecipeList";

function App() {
  const location = useLocation();

  return (
    <div className="container top-level">
      <Navbar />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
