import { NavLink } from 'react-router-dom';
import './NavLinks.style.scss';

export default function NavLinks() {
    return (
        <nav className='nav-links'>
            <div className='link-container'>
                <NavLink to={"/basic"}> React Basic </NavLink>
                <NavLink to={"/advance"}> React Advance </NavLink>
                <NavLink to={"/hooks"}> React Hooks </NavLink>
                <NavLink to={"/router"}> React Router </NavLink>
                <NavLink to={"/redux"}> React Redux </NavLink>
            </div>
        </nav>
    )
}
