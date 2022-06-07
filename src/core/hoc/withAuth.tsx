import React, { useEffect } from "react";
import { useAppThunkDispatch } from "../hooks/store.hooks";
import { refresh } from "../store/user/user.actions";

export function withAuth<T>(Component: React.ComponentType<T>) {

    const NewComponent = (props: T) => {

        const dispatch = useAppThunkDispatch();

        useEffect(() => {
            dispatch(refresh(""));
        }, [dispatch])

        return <Component {...(props as T)} />;
    };

    return NewComponent;
}