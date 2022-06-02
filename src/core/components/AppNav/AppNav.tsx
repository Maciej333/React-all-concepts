import NavLinks from '../NavLinks/NavLinks';
import NavUser from '../NavUser/NavUser';
import './AppNav.style.scss';

export default function AppNav() {
    return (
        <div className='app-nav'>
            <NavLinks />
            <NavUser />
        </div>
    )
}
