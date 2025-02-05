
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <h4>This is menu</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}
export default Menu;