/* eslint-disable react/no-unescaped-entities */
/**
 * The external imports
 */
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBook,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

/**
 * The internal imports
 */
const pagesArray = [
  {
    id: 1,
    path: "/",
    text: "Acceuil",
    icon: faHouse,
  },
  {
    id: 2,
    path: "/about",
    text: "A Propos",
    icon: faUser,
  },
  {
    id: 3,
    path: "/portefolio",
    text: "Portefolio",
    icon: faBook,
  },
  {
    id: 4,
    path: "/contact",
    text: "Contact",
    icon: faEnvelope,
  },
  {
    id: 5,
    path: "/blog",
    text: "Blog",
    icon: faComment,
  },
];

function Navbar() {
  return (
    <div className="nav">
      <ul className="icon-menu">
        {pagesArray.map((page) => (
          <li key={page.id} className="icon-box">
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                `${
                  isActive &&
                  "bg-[#ffb700] h-full w-full rounded-full flex items-center justify-center"
                }`
              }
            >
              <FontAwesomeIcon icon={page.icon} className="text-lg" />
              <h2>{page.text}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
