import { useAppSelector } from '../../../../../core/hooks/store.hooks';
import { UserRoles } from '../../../../../core/utils/userRoles.enum';
import MenuLink from '../MenuLink/MenuLink';

export default function MenuProtectedLink(props: { path: string, name: string, role: UserRoles }) {

    const { path, name, role } = props;
    const { isLogin, userData } = useAppSelector(state => state.user);

    return (
        isLogin && userData.role.includes(role) ?
            <MenuLink path={path} name={name} />
            :
            null
    )
}
