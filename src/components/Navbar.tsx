import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const pages = [
  {
    link: "/",
    name: "home",
  },
  {
    link: "/recipes",
    name: "recipes",
  },
  {
    link: "/about",
    name: "about",
  },
];

function Navbar() {
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="coins_icon_white.png" alt="logo icon" />
          nutrisave
        </div>
        <ol>
          {pages.map((page) => (
            <Link key={page.name} to={page.link} onClick={() => setSelectedPage(page)}>
              <li className={page === selectedPage ? "active" : ""}>
                {page.name}
                {page === selectedPage ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            </Link>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
