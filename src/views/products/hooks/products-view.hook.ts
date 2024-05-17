import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../utils/products/products.context";


export const useViewProduct = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { products, actions, state } = useContext(ProductContext);
  
  useEffect(()=>{
    actions.viewOne(location.state)
  },[])
  
  const product = products[0];
  
  
  const editProduct = () => {
    navigate('/Products/Edit')
  }

  const deleteProduct = (sku:number) => {
    navigate("/Products/Delete", { state: sku, replace: true })
  }

  const productList = () => {
    navigate("/Products")
  }

  return{
    product,
    editProduct,
    deleteProduct,
    productList
  }
}