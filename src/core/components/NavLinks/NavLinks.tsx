import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store.hooks';
import './NavLinks.style.scss';

export default function NavLinks() {

    const { isLogin } = useAppSelector(state => state.user);

    return (
        <nav className='nav-links'>
            <div className='link-container'>
                <NavLink to={"/basic"}> React Basic </NavLink>
                <NavLink to={"/advance"}> React Advance </NavLink>
                <NavLink to={"/hooks"}> React Hooks </NavLink>
                <NavLink to={"/router"}> React Router </NavLink>
                <NavLink to={"/redux"}> React Redux </NavLink>
                <NavLink to={"/http"}> React HTTP </NavLink>
                {
                    isLogin ?
                        <NavLink to={"/components"}> Components </NavLink>
                        :
                        null
                }
            </div>
        </nav>
    )
}
