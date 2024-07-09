import React, { useLayoutEffect } from "react";
import Header from "../../components/layout/Header/Header";
import { useGetProductsQuery } from "../../lib/hooks/product.api";

import "./Catalog.scss";

const CartsCatalog = () => {
  const { data } = useGetProductsQuery(1);

  return (
    <main className="main">
      <Header title={null} />
      <div className="main-catalog">
        <h2 className="main-catalog-title">Игры Klei из Steam</h2>
        <div className="menu-catalog-products">
          {data ? (
            data.map((product) => {
              return (
                <div
                  className="catalog-product"
                  key={`main-cart-${product.thumb}`}
                >
                  <p className="product-title">
                    {product.external}
                  </p>
                  <img className="product-image" src={product.thumb} alt="nothing" />
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
