import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/HomePage">
                <h2>Mariel Metalios</h2>
            </Link>

            <Link to="/AboutMe">
                <h2>About Me</h2>
            </Link>

            <Link to="/Contact">
                <h2>Get in Touch</h2>
            </Link>

            <Link to="/Portfolio">
                <h2>Portfolio</h2>
            </Link>
            
            <Link to="/Resume">
                <h2></h2>
            </Link>
        </div>
    )
}

export default Navigation;