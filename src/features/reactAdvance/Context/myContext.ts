import { createContext } from "react";
import { IMyContext } from "../../../core/models/MyContext";

const initContext: IMyContext = {
    value: "val from context",
    setValue: () => ""
}

export const MyContext = createContext(initContext);