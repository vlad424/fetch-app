import React, { useEffect, useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux";
import { productSlice } from "../../../lib/reducer/product.slice";
import { Products } from "../../../lib/hooks/product.type";
import { Link } from "react-router-dom";

const LikedProducts = () => {
  const { pushCurrentProduct, setLike } = productSlice.actions;

  const dispatch = useAppDispatch();

  const reduxProducts = useAppSelector((state) => state.productSlice.products);

  const returnLikedProducts = () => {
    const likedProducts: any = [];

    for (let i = 0; i < reduxProducts.length; i++) {
      if (reduxProducts[i].isLiked === true) {
        likedProducts.push(reduxProducts[i]);
      }
    }
    return likedProducts;
  };

  useEffect(() => {
    returnLikedProducts();
  }, []);

  return (
    <>
      {returnLikedProducts() ? (
        returnLikedProducts().map((product: Products) => {
          return (
            <div
              onClick={() => {
                dispatch(pushCurrentProduct(product));
              }}
              className="catalog-product"
              key={`main-cart-${product.thumb}`}
            >
              <Link to={"/cart"}>
                <img
                  src={product.thumb}
                  alt="Не удалось загрузить"
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <div className="product-user-view">
                <Link to={"/cart"}>
                  <p className="product-title">{product.external}</p>
                </Link>
                <div className="user-input">
                  <p className="product-price">{product.cheapest}$</p>
                  <button
                    onClick={() => dispatch(setLike(product.gameID))}
                    style={{ color: product.isLiked ? "red" : "black" }}
                  >
                    like
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default LikedProducts;
