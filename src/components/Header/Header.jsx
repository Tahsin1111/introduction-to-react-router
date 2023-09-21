
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <h1>My Website</h1>
              <Link to="/">Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/posts'>Posts</Link>
              <Link to='/contact'>Contact Us</Link>
              <Link to='/users'>Users</Link>
              

            </nav>
        </div>
    );
};

export default Header;