import React, { useLayoutEffect, useState } from "react";
import Header from "../../components/layout/Header/Header";
import { useGetProductsQuery } from "../../lib/hooks/product.api";

import "./Catalog.scss";

const CartsCatalog = () => {
  const [keyWord, setKeyWord] = useState("starve");

  const { data } = useGetProductsQuery(keyWord);

  return (
    <main className="main">
      <Header title={null} />
      <div className="main-catalog">
        <h2 className="main-catalog-title">
          Игры по ключевому слову: {keyWord} из Steam
        </h2>
        <div className="menu-catalog-products">
          {data ? (
            data.map((product) => {
              return (
                <div
                  className="catalog-product"
                  key={`main-cart-${product.thumb}`}
                  style={{
                    backgroundImage: `url(${product.thumb})`,
                  }}
                >
                  <p className="product-title">{product.external}</p>
                  <div className="product-user-input">
                    <p className="product-price">{product.cheapest}$</p>
                    <button>like</button>
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
