import { ProductType } from "../../types/product.type"

export type ProductActionType = {
  action: 'ALL',
  products: ProductType[]
}|{
  action: 'VIEW',
  sku: number
}|{
  action: 'UPDATE',
  sku: number,
  productUpdate: Partial<ProductType>
}|{
  action: 'DELETE',
  sku: number
}