import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Navigation = () => {
    return (
        <NavBar 
            links={[
                <Link key={1} to="/home">
                    <h2>Home</h2>
                </Link>,

                <Link key={2} to="/about">
                    <h2>About Me</h2>
                </Link>,

                <Link key={3} to="/contact">
                    <h2>Get in Touch</h2>
                </Link>,

                <Link key={4} to="/portfolio">
                 <h2>Portfolio</h2>
                </Link>,

                <Link key={5} to="/resume">
                    <h2></h2>
                </Link>
        ]}
    />
    );
}

export default Navigation;