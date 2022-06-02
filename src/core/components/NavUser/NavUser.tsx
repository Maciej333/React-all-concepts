import { useSelector } from 'react-redux';
import { UserState } from '../../models/UserState';
import { RootState } from '../../store/store';
import './NavUser.style.scss';

export default function NavUser() {

    const { isLogin, userData } = useSelector<RootState, UserState>(state => state.user);

    return (
        isLogin ?
            <div className='nev-user'>
                <span>Firstname:</span>
                <span>{userData.firstName}</span>
                <span>Lastname:</span>
                <span>{userData.lastName}</span>
            </div>
            :
            <p>Zaloguj</p>
    )
}
