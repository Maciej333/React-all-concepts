import './Params.style.scss';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

interface Param {
    id?: number,
    name?: string
}

export const Params = () => {

    const location = useLocation();
    const param = useParams() as Param;

    return (
        <div className='params'>
            <nav>
                <Link to="params">No params</Link>
                <Link to="params/1">Only id param</Link>
                <Link to="params/1/Bozenka">Id and Name param</Link>
            </nav>

            <span>Pathname:</span>
            <span>{location.pathname}</span>

            <span>Params:</span>
            <div className='div-grid-2'>
                <span>Id:</span>
                <span>{param?.id ? param.id : "no id given"}</span>
                <span>Name:</span>
                <span>{param?.name ? param.name : "no name given"}</span>
            </div>
            <Outlet />
        </div>
    )
}

export default function NestedParams() {
    const param = useParams() as Param;

    return (
        <p>
            <span>{param?.id ? param.id : "no id given"}</span>
            {" | "}
            <span>{param?.name ? param.name : "no name given"}</span>
        </p>
    )
}
