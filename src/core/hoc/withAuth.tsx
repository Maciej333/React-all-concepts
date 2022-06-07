import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { refresh } from "../store/user/user.actions";

export function withAuth<T>(Component: React.ComponentType<T>) {

    const NewComponent = (props: T) => {

        const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();

        useEffect(() => {
            dispatch(refresh());
        }, [dispatch])

        return <Component {...(props as T)} />;
    };

    return NewComponent;
}