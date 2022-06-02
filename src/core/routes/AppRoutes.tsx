import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRoutes(props: { NavElemet: JSX.Element }) {
    return (
        <Router>
            {props.NavElemet}
            <Routes>
                <Route path="/" element={<p>..</p>} />
            </Routes>
        </Router>
    )
}
