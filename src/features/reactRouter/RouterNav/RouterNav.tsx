import './RouterNav.style.scss';
import { NavLink } from 'react-router-dom'

export default function RouterNav() {
    return (
        <nav className='router-nav'>
            <div className='link-container'>
                <NavLink to="/router/abc">ABC</NavLink>
            </div>
        </nav>
    )
}
