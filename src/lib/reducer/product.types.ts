import { Products } from "../hooks/product.type";

export interface ProductSliceState {
  products: Array<Products>
  currentProduct: Products | {},
  showLiked: boolean
}