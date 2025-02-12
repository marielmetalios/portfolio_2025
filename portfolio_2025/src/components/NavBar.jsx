import { Link } from 'react-router-dom';


const NavBar = ({ links }) => {
    return (
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>
                <h2>{link.label}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default NavBar;