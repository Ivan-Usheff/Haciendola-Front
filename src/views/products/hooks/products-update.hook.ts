import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../../../utils/products/products.context";
import { ProductType } from "../../../utils/types/product.type";


export const useUpdateProducts = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { products, actions, state } = useContext(ProductContext);
  const [ productstate, setProductState ] = useState<ProductType>(products[0])
  
  const fechUpdate = async () => {
    const uri = `${process.env.REACT_APP_BACK_SERVICE}/products/update`
    const token = localStorage.getItem('token')
    const requestOptions:RequestInit = {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({sku: +productstate.sku, product: {...productstate, sku: +productstate.sku}})
    };
    fetch(uri, requestOptions)
      .then((response) => {
        actions.update(location.state, productstate)
        return response.json()
      })
      .catch((err) => {
        console.log("🚀 ~ fechUpdate ~ err:", err)
      });
  }


  const handleSubmit  = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    await fechUpdate()
  };
  
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const target = e.target;
    const { name, value } = target;
    setProductState((prevState) => ({ ...prevState, [name]: value}))
  }
  
  const onInputChangeNumber = (e: ChangeEvent<HTMLInputElement>) =>{
    const target = e.target;
    const { name, value } = target;
    setProductState((prevState) => ({ ...prevState, [name]: +value}))
  }

  const goBack = () => {
    actions.viewOne(productstate.sku)
    navigate(-1)
  }
  
  return {
    productstate,
    handleSubmit,
    onInputChange,
    onInputChangeNumber,
    goBack
  }

}