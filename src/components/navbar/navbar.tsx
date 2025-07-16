import "./navbar.css";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Letter", url: "/letter" },
  { name: "Home", url: "/" },
  { name: "Joke", url: "/joke" },
];

export default function Navbar() {
  const linkList = links.map((link) => (
    <li key={link.name} tabIndex={-1}>
      <NavLink to={link.url} end>
        <button tabIndex={-1}>{link.name}</button>
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar">
      <ul>{linkList}</ul>
    </div>
  );
}
