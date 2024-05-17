import { createContext } from "react";
import { ProductStateType } from "./types/state.type";


export const ProductContext = createContext<ProductStateType>({} as ProductStateType)