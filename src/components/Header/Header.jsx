
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <h1>My Website</h1>
              <Link to="/">Home</Link>
              <Link to='/about'>About</Link>
              <NavLink to='/posts'>Posts</NavLink>
              <Link to='/contact'>Contact Us</Link>
              <NavLink to='/users'>Users</NavLink>
              

            </nav>
        </div>
    );
};

export default Header;