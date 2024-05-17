import { createContext } from "react";
import { StateType } from "./types/state.type";


export const AuthContext = createContext<StateType>({} as StateType)