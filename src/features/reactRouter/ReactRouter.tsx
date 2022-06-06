import './ReactRouter.style.scss';
import ReactRouterRoutes from './routes/ReactRouterRoutes';
import { Outlet } from 'react-router-dom';
import RouterNav from './RouterNav/RouterNav';

export default function ReactRouter() {
    return (
        <div className='react-router'>
            <h1>ReactRouter</h1>
            <RouterNav />
            <ReactRouterRoutes />
            <Outlet />
        </div>
    )
}
