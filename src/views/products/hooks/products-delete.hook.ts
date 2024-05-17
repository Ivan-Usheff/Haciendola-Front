import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../utils/products/products.context";
import { ProductType } from "../../../utils/types/product.type";



export const useDeleteProduct = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const { count, products, actions, state  } = useContext(ProductContext);
  const [ productstate, setProductState ] = useState<ProductType>(products[0])
  
  const fechDelete = async () => {
    const uri = `${process.env.REACT_APP_BACK_SERVICE}/products/${+productstate.sku}`
    const token = localStorage.getItem('token')
    const requestOptions:RequestInit = {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`
        // "Content-Type": "application/json"
      }
    };
    fetch(uri, requestOptions)
      .then((response) => {
        return response.json()
      })
      .catch((err) => {
        console.log("🚀 ~ fechUpdate ~ err:", err)
      });
  }

  useEffect(()=>{
    (async () => {
      await fechDelete()
    })();
    actions.delete(location.state)
    return navigate('/Products', {replace: true})
  },[])
  
  
} 