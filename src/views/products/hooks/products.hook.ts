import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../utils/products/products.context";
import { useNavigate } from "react-router-dom";


export const useProducts = () => {

  const navigate = useNavigate()
  const { count, products, actions, state  } = useContext(ProductContext);
  const [viewType, setViewType] = useState<'row'|'card'>('row');
  
  const viewProduct = (sku:number) => {
    actions.viewOne(sku)
    navigate("/Products/View", { state: sku})
  }

  const deleteProduct = (sku:number) => {
    navigate("/Products/Delete", { state: sku, replace: true })
  }
  
  useEffect(() => {
    actions.viewAll()
  },[]);

  return {
    products,
    viewProduct,
    deleteProduct,
    viewType,
    setViewType
  }
}