import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const ReactBasic = React.lazy(() => import('../../features/reactBasic/ReactBasic'));
const ReactAdvance = React.lazy(() => import('../../features/reactAdvance/ReactAdvance'));

export default function AppRoutes(props: { NavElemet: JSX.Element }) {
    return (
        <Router>
            {props.NavElemet}
            <Routes>
                <Route path="/basic" element={<Suspense fallback={<Loading />}><ReactBasic /></Suspense>} />
                <Route path="/advance" element={<Suspense fallback={<Loading />}><ReactAdvance /></Suspense>} />
            </Routes>
        </Router>
    )
}
