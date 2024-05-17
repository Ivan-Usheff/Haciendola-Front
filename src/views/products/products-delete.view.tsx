import { useContext, useEffect } from "react";
import { ProductContext } from "../../utils/products/products.context";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeleteProduct } from "./hooks/products-delete.hook";



export const ProductDeleteView = () => {

  useDeleteProduct()

  return(<></>)
}