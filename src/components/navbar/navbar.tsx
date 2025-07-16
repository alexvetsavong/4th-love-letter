import "./navbar.css";
import { NavLink } from "react-router-dom";

const links = [
  { name: "LETTER", url: "/letter" },
  { name: "HOME", url: "/" },
  { name: "JOKE", url: "/joke" },
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
