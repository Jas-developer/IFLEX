import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#services">Services</Link>
        <Link to="#contact">Contact</Link>
      </ul>
    </nav>
  );
}
