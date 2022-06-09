import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactHTTP from "../../features/reactHTTP/ReactHTTP";
import ReactRedux from "../../features/reactRedux/ReactRedux";
import Loading from "../components/Loading/Loading";
import Login from "../components/Login/Login";
import { UserRoles } from "../utils/userRoles.enum";
import ProtectedRoute from "./ProtectedRoute";

const ReactBasic = React.lazy(() => import('../../features/reactBasic/ReactBasic'));
const ReactAdvance = React.lazy(() => import('../../features/reactAdvance/ReactAdvance'));
const ReactHooks = React.lazy(() => import("../../features/reactHooks/ReactHooks"));
const ReactRouter = React.lazy(() => import("../../features/reactRouter/ReactRouter"));
const ReactComponents = React.lazy(() => import("../../features/reactComponents/ReactComponents"));

export default function AppRoutes(props: { NavElemet: JSX.Element }) {
    return (
        <Router>
            {props.NavElemet}
            <Routes>
                <Route path="/basic" element={<Suspense fallback={<Loading />}><ReactBasic /></Suspense>} />
                <Route path="/advance" element={<Suspense fallback={<Loading />}><ReactAdvance /></Suspense>} />
                <Route path="/hooks" element={<Suspense fallback={<Loading />}><ReactHooks /></Suspense>} />
                <Route path="/router/*" element={<Suspense fallback={<Loading />}><ReactRouter /></Suspense>} />
                <Route path="/redux" element={<Suspense fallback={<Loading />}><ReactRedux /></Suspense>} />
                <Route path="/http" element={<Suspense fallback={<Loading />}><ReactHTTP /></Suspense>} />
                <Route
                    path="/components"
                    element={
                        <ProtectedRoute authRole={[UserRoles.NO_AUTH, UserRoles.AUTH]}>
                            <Suspense fallback={<Loading />}>
                                <ReactComponents />
                            </Suspense>
                        </ProtectedRoute>
                    } />
                <Route path="/authenticate" element={<Login />} />
                <Route path="*" element={<p>Path not found</p>} />
            </Routes>
        </Router>
    )
}
