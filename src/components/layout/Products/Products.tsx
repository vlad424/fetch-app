import React from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux";
import { productSlice } from "../../../lib/reducer/product.slice";
import { Link } from "react-router-dom";

const Products = () => {
  const { pushCurrentProduct, setLike, deleteProduct } = productSlice.actions;

  const dispatch = useAppDispatch();

  const reduxProducts = useAppSelector((state) => state.productSlice.products);

  return (
    <>
      {reduxProducts ? (
        reduxProducts.map((product) => {
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
                  <div className="product-buttons">
                    <button
                      onClick={() => dispatch(deleteProduct(product.gameID))}
                      style={{
                        color: product.isLiked ? "red" : "black",
                        fontSize: "32px",
                        cursor: 'pointer'
                      }}
                    >
                      {'🗑'}
                    </button>{" "}
                    <button
                      onClick={() => dispatch(setLike(product.gameID))}
                      style={{
                        color: product.isLiked ? "red" : "black",
                        fontSize: "32px",
                        cursor: 'pointer'
                      }}
                    >
                      {product.isLiked ? "❤" : "♡"}
                    </button>
                  </div>
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

export default Products;
