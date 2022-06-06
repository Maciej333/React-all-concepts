import { Routes, Route, Outlet } from 'react-router-dom';

export default function ReactRouterRoutes() {
    return (
        <Routes>
            <Route path="" element={<Outlet />}>
                <Route path="/" element={<p>wybierz</p>} />
                <Route path="/abc" element={<p>ABC</p>} />
                <Route path="**" element={<p>ERROR</p>} />
            </Route>
        </Routes>
    )
}
