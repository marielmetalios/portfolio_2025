import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Navigation = () => {
  const links = [
    { to: "/home", label: "Home" },
    { to: "/aboutme", label: "About" },
    { to: "/contact", label: "Get in Touch" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" }
  ];

  return <NavBar links={links} />;
};

export default Navigation;