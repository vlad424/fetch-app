import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Like, Products } from "../hooks/product.type";
import { ProductSliceState } from "./product.types";

const initialState : ProductSliceState = {
  products: [],
  currentProduct: {}
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    pushProducts(state, action: PayloadAction<Array<Products>>) {
      state.products = []

      state.products = action.payload
    },
    pushCurrentProduct(state, action : PayloadAction<Products>) {
      state.currentProduct = action.payload
    }
  }
})

export default productSlice.reducer