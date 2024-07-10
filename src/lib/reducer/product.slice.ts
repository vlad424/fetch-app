import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Like, Products } from "../hooks/product.type";
import { ProductSliceState } from "./product.types";

const initialState: ProductSliceState = {
  products: [],
  currentProduct: {},
  showLiked: false
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    pushProducts(state, action: PayloadAction<Array<Products>>) {
      state.products = [];

      state.products = action.payload;
    },
    pushCurrentProduct(state, action: PayloadAction<Products>) {
      state.currentProduct = action.payload;
    },
    setLike(state, action: PayloadAction<string>) {
      state.products.find((x) => x.gameID === action.payload)!.isLiked =
        !state.products.find((x) => x.gameID === action.payload)!.isLiked;
    },
    setShow(state) {
      state.showLiked = !state.showLiked
    },
    deleteProduct(state, action : PayloadAction<string>) {
      const indexProduct = (state.products as Array<Products>).findIndex(x => x.gameID === action.payload)

      state.products.splice(indexProduct, 1)
    }
  },
});

export default productSlice.reducer;
