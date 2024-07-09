import React, { useLayoutEffect, useState } from "react";
import Header from "../../components/layout/Header/Header";
import { useGetProductsQuery } from "../../lib/hooks/product.api";

import "./Catalog.scss";
import { useAppDispatch, useAppSelector } from "../../lib/redux";
import { productSlice } from "../../lib/reducer/product.slice";

const CartsCatalog = () => {
  const [keyWord, setKeyWord] = useState("starve");

  const { pushProducts, pushCurrentProduct } = productSlice.actions
  const { data, isLoading } = useGetProductsQuery(keyWord);

  const dispatch = useAppDispatch()
  const reduxProducts = useAppSelector(state => state.productSlice.products)

  useLayoutEffect(() => {
    let changedData = []

    if(data?.length)

    for(let i = 0; i < data?.length; i++) {
      changedData.push({
        ...data[i],
        isLiked: false
      })
    }
    dispatch(pushProducts(changedData))
  }, [isLoading]) 

  return (
    <main className="main">
      <Header title={null} />
      <div className="main-catalog">
        <h2 className="main-catalog-title">
          Игры по ключевому слову: {keyWord} из Steam
        </h2>
        <div className="menu-catalog-products">
          {reduxProducts ? (
            reduxProducts.map((product) => {
              return (
                <div
                  onClick={() => {
                    dispatch(pushCurrentProduct(product))
                  }}
                  className="catalog-product"
                  key={`main-cart-${product.thumb}`}
                >
                  <img
                    src={product.thumb}
                    alt="Не удалось загрузить"
                    style={{
                      height: "100px",
                      width: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="product-user-view">
                    <p className="product-title">{product.external}</p>
                    <div className="user-input">
                      <p className="product-price">{product.cheapest}$</p>
                      <button>like</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>Loading</>
          )}
        </div>
      </div>
    </main>
  );
};

export default CartsCatalog;
