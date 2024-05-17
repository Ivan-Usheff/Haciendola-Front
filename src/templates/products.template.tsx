import { Outlet } from "react-router-dom"
import { AuthProvider } from "../utils/auth/auth.provider"
import { ProductsProvider } from "../utils/products/products.provider"


export const ProductsTemplate = () => {
  return(
    <AuthProvider childen={
      <ProductsProvider childen={
        <Outlet />  
      } />
    } />
  )
}