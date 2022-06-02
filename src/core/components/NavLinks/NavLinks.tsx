import { NavLink } from 'react-router-dom';
import './NavLinks.style.scss';

export default function NavLinks() {
    return (
        <nav>
            <NavLink to={"/"}> App </NavLink>
        </nav>
    )
}
