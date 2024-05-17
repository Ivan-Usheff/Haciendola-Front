import { useEffect, useReducer } from "react";
import { ProductContext } from "./products.context"
import { productsReducer } from "./products.reducer";
import { ProductStateType } from "./types/state.type"
import { ProductType } from "../types/product.type";
import { useNavigate } from "react-router-dom";


const INIT_STATE:ProductStateType = { 
  state: 'ALL',
  count: 0,
  products: [],
  actions: {
    viewAll: () => {},
    viewOne: (sku:number) => {},
    update: (sku:number, productUpdate: Partial<ProductType>) => {},
    delete: (sku:number) => {}
  }
};

type ChildrenProp = {childen: JSX.Element | JSX.Element[]};

export const ProductsProvider = ({childen}:ChildrenProp) => {

  let initProducts:ProductType[] = [];
  const navigate = useNavigate()
  const [productState, productDispatch] = useReducer( productsReducer, INIT_STATE );

  const getAllProducts = async (): Promise<void> => {
    const uri = `${process.env.REACT_APP_BACK_SERVICE}/products/`
    const token = localStorage.getItem('token')
    const requestOptions:RequestInit = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}` 
      }
    };
    
    await fetch(uri, requestOptions)
    .then(res => res.json())
    .then(data => {
      if(data.statusCode === 401)
        navigate('/Auth')

      productDispatch({
        action:'ALL',
        products: data
      })
    })
    .catch(error => {
      console.log("🚀 ~ getAllProducts ~ error:", error)
    })
  }

  const allProduct = () => {
    productDispatch({action:'ALL', products: productState.products});
  }
  
  const viewProduct = (sku:number) => {
    productDispatch({action:'VIEW', sku});
  }

  const updateProduct = (sku:number, productUpdate: Partial<ProductType>) => {
    productDispatch({action:'UPDATE', sku, productUpdate});
  }

  const deleteProduct = (sku:number) => {
    productDispatch({action:'DELETE', sku});
  }

  useEffect(() => {
    (async () => {
      try{
        if(productState.state === 'ALL')
          await getAllProducts();
      }catch(e){
        console.log("🚀 ~ e:", e)
        navigate('/Auth', {replace: true})
      }
    })();
  },[]);

  return(
    <ProductContext.Provider value={{
      ...productState,
      actions: {
        viewAll: allProduct,
        viewOne: viewProduct,
        update: updateProduct,
        delete: deleteProduct
      }
      }}>
      {childen}
    </ProductContext.Provider>
  )
}