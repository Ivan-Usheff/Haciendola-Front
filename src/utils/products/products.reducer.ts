import { ProductType } from "../types/product.type";
import { ProductActionType } from "./types/action.type";
import { ProductStateType } from "./types/state.type";



export const productsReducer = (state: ProductStateType, action: ProductActionType):ProductStateType => {
  
  switch(action.action){
    case 'ALL':
      return {
        ...state,
        state: 'ALL',
        products: action.products
      };

    case 'VIEW':
      return {
        ...state,
        state: 'VIEW',
        products: state.products.filter(({...s}) => s.sku === action.sku)
      };
      
    case 'UPDATE':
      const indexUPDATE = state.products.findIndex((p) => p.sku === action.sku);
      state.products[indexUPDATE] = action.productUpdate as Required<ProductType>;
      return {
        ...state,
        state: 'UPDATE',
      };

    case 'DELETE':
      const newState = state.products.filter((p) => p.sku !== action.sku);
      return {
        ...state,
        state: 'DELETE',
        products: newState
      };
      
    default:
      return state;
  }
  
}