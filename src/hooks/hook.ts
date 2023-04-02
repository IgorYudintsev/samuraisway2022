import {AppDispatch, RootState} from "../redux/redux-store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>() //для санок
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector