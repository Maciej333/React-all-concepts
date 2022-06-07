import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppThunkDispatch = () => useDispatch<ThunkDispatch<RootState, void, Action>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;