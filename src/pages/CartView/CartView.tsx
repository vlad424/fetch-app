import React from 'react';
import Header from '../../components/layout/Header/Header';
import { useAppSelector } from '../../lib/redux';
import { Products } from '../../lib/hooks/product.type';

import './CartView.scss'

const CartView = () => {
  const currentProduct : Products = useAppSelector(state => state.productSlice.currentProduct) as Products

  return (
    <main className="main">
      <Header title={currentProduct.external} />
      <div className="main-cart-area">
        <aside className="cart-area-info">
          <img src={currentProduct.thumb} alt="" />
          
        </aside>
        <aside className="cart-area-description">
          {currentProduct.external}
        </aside>
      </div>
    </main>
  );
};

export default CartView;