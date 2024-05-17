import { ProductType } from "../../types/product.type";


export type ProductStateType = {
  state: 'ALL'|'VIEW'|'UPDATE'|'DELETE'
  count: number;
  products: ProductType[];
  actions: {
    viewAll: () => void,
    viewOne: (sku:number) => void,
    update: (sku:number, productUpdate: Partial<ProductType>) => void,
    delete: (sku:number) => void
  };
}