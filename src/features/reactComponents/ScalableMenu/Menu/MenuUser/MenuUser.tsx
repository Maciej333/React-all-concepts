import { useAppSelector } from '../../../../../core/hooks/store.hooks';
import './MenuUser.style.scss';
import UserSVG from './user.svg';

export default function MenuUser(props: { pathToProfile: string }) {

    const { userData } = useAppSelector(state => state.user);

    return (
        <div className='menu-user'>
            <img src={UserSVG} alt="user" />
            <a href={props.pathToProfile}>{userData.firstName}{" "}{userData.lastName}</a>
        </div>
    )
}
