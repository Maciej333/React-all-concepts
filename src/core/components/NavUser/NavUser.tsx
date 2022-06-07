import { Link } from 'react-router-dom';
import { useAppSelector, useAppThunkDispatch } from '../../hooks/store.hooks';
import { logout } from '../../store/user/user.actions';
import { UserRoles } from '../../utils/userRoles.enum';
import './NavUser.style.scss';

export default function NavUser() {

    const { isLogin, userData } = useAppSelector(state => state.user);
    const dispatch = useAppThunkDispatch();

    const handleLogout = () => {
        dispatch(logout(true));
    }

    return (
        isLogin ?
            <div className='nev-user'>
                <div className='nev-user-data'>
                    <span>Firstname:</span>
                    <span>{userData.firstName}</span>
                    <span>Lastname:</span>
                    <span>{userData.lastName}</span>
                    <span>Role:</span>
                    <span>{userData.role.map(el => UserRoles[el])}</span>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            :
            <div className='nav-user-link'>
                <Link to="/authenticate">Login</Link>
            </div>
    )
}
