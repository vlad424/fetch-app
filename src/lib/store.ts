import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "./hooks/product.api";
import productSlice from "./reducer/product.slice";

const rootReducer = combineReducers({
  productSlice,
  [productApi.reducerPath]: productApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
