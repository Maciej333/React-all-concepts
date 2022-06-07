import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProtectedRoute from '../../../core/routes/ProtectedRoute';
import { UserRoles } from '../../../core/utils/userRoles.enum';
import NestedParams from '../RouterBasic/Params/Params';
import RouterProtected from '../RouterProtected/RouterProtected';

const RouterBasic = lazy(() => import('../RouterBasic/RouterBasic'));

export default function ReactRouterRoutes() {
    return (
        <Routes>
            <Route path="" element={<Outlet />}>
                <Route path="/" element={<p>Select nested path</p>} />
                <Route path="/basic/*" element={<Suspense fallback={<p>Loading...</p>}><RouterBasic /></Suspense>}>
                    <Route path="params/:id/:name" element={<NestedParams />}></Route>
                    <Route path="params/:id" element={<NestedParams />}></Route>
                    <Route path="params" element={<NestedParams />}></Route>
                </Route>
                <Route
                    path="/protected"
                    element={
                        <ProtectedRoute authRole={[UserRoles.AUTH]}>
                            <RouterProtected />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<p>Path not found</p>} />
            </Route>
        </Routes>
    )
}
