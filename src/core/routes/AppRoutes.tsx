import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const ReactBasic = React.lazy(() => import('../../features/reactBasic/ReactBasic'));

export default function AppRoutes(props: { NavElemet: JSX.Element }) {
    return (
        <Router>
            {props.NavElemet}
            <Routes>
                <Route path="/basic" element={<Suspense fallback={<Loading />}><ReactBasic /></Suspense>} />
            </Routes>
        </Router>
    )
}
