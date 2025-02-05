
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-item' : 'pending-item'} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-item' : 'pending-item'} to="/contact">Contact</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active-item' : 'pending-item'} to="/about">About</NavLink></li>
            </ul>
        </header>
    )
}
export default Header;
/*
Khi nào nên dùng?
Link: Dùng khi chỉ cần điều hướng đơn giản, không quan tâm đến trạng thái của link.
NavLink: Dùng cho thanh điều hướng để hiển thị trạng thái "active" rõ ràng.
*/
