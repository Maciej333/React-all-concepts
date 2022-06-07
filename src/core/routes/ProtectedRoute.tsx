// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/store.hooks";
// import { UserState } from "../models/UserState";
// import { RootState } from "../store/store";
import { UserRoles } from "../utils/userRoles.enum";

export type ProtectedRouteLocationState = {
    from: string,
    role: UserRoles[]
}

export default function ProtectedRoute(props: { children: JSX.Element, authRole: UserRoles[] }) {

    const { children, authRole } = props;

    const location = useLocation();
    // const auth = useSelector<RootState, UserState>(state => state.user);
    const auth = useAppSelector(state => state.user);
    let isRole = false;

    auth.userData.role.forEach(role => {
        if (authRole.includes(Number(role)))
            isRole = true;
    })


    if (!auth.isLogin || !isRole) {
        return <Navigate to="/authenticate" state={{ from: location.pathname, role: authRole }} replace />;
    }

    return children;
}
