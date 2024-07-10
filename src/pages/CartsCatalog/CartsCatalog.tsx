import React, { useLayoutEffect, useState } from "react";
import Header from "../../components/layout/Header/Header";
import { useGetProductsQuery } from "../../lib/hooks/product.api";

import "./Catalog.scss";
import { useAppDispatch, useAppSelector } from "../../lib/redux";
import { productSlice } from "../../lib/reducer/product.slice";
import LikedProducts from "../../components/layout/LikedProducts/LikedProducts";
import Products from "../../components/layout/Products/Products";

const CartsCatalog = () => {
  const [keyWord, setKeyWord] = useState("creed");

  const { pushProducts }  = productSlice.actions;
  const { data, isLoading } = useGetProductsQuery(keyWord);

  const dispatch = useAppDispatch();

  const showLiked = useAppSelector((state) => state.productSlice.showLiked);

  useLayoutEffect(() => {
    let changedData = [];

    if (data?.length)
      for (let i = 0; i < data?.length; i++) {
        changedData.push({
          ...data[i],
          isLiked: false,
        });
      }
    dispatch(pushProducts(changedData));
  }, [isLoading]);

  return (
    <main className="main">
      <Header title={null} />
      <div className="main-catalog">
        <h2 className="main-catalog-title">
          Игры по ключевому слову: {keyWord} из Steam
        </h2>
        <div className="menu-catalog-products">
          {showLiked ?
            <LikedProducts/>
            :
            <Products/>
          }
        </div>
      </div>
    </main>
  );
};

export default CartsCatalog;
