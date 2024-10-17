import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

//rfc - shortcut to create start code for component

function App() {
  const location = useLocation();

  return (
    <div className="container top-level">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
