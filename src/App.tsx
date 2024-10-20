import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { AnimatePresence } from "framer-motion";

//rfc - shortcut to create start code for component

function App() {
  const location = useLocation();

  return (
    <div className="container top-level">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
