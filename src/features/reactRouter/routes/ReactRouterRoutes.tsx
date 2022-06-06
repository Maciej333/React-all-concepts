import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

const RouterBasic = lazy(() => import('../RouterBasic/RouterBasic'));

export default function ReactRouterRoutes() {
    return (
        <Routes>
            <Route path="" element={<Outlet />}>
                <Route path="/" element={<p>Select nested path</p>} />
                <Route path="/basic/*" element={<Suspense fallback={<p>Loading...</p>}><RouterBasic /></Suspense>}>
                </Route>
                <Route path="*" element={<p>Path not found</p>} />
            </Route>
        </Routes>
    )
}
