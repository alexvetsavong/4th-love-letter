import "./navbar.css";

const links = [
  { name: "Letter", url: "/letter" },
  { name: "Home", url: "/" },
  { name: "Joke", url: "/joke" },
];

export default function Navbar() {
  const linkList = links.map((link) => (
    <li>
      <a href={link.url}>
        <button>{link.name}</button>
      </a>
    </li>
  ));

  return (
    <>
      <div className="navbar">
        <ul>{linkList}</ul>
      </div>
      <div className="spacer"></div>
    </>
  );
}
