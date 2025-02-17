import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Navigation() {
  const links = [
    { to: "/home", label: "About Me" },
    { to: "/contact", label: "Contact" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" }
  ];

  return <NavBar links={links} className="text-white"/>;
};

export default Navigation;