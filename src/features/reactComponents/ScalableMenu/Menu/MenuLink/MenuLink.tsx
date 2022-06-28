import { NavLink } from 'react-router-dom';
import './MenuLink.style.scss';

export default function MenuLink(props: { path: string, name: string }) {
    const { path, name } = props;

    return (
        <NavLink className="menu-link" to={path}>{name}</NavLink>
    )
}
