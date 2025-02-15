import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Navigation() {
  const links = [
    { to: "/home", label: "Home" },
    { to: "/aboutme", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" }
  ];

  return <NavBar links={links} />;
};

export default Navigation;