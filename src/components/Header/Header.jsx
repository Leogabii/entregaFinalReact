import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
        <span>⌚</span>
        <span>Relojería Cronos</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
