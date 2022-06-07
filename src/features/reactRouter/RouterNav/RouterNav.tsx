import './RouterNav.style.scss';
import { NavLink } from 'react-router-dom'

export default function RouterNav() {
    return (
        <nav className='router-nav'>
            <div className='link-container'>
                <NavLink to="/router/basic">Basic</NavLink>
                <NavLink to="/router/protected">Protected [ Auth ]</NavLink>
                <NavLink to="/router/error">Error</NavLink>
            </div>
        </nav>
    )
}
