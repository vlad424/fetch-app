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
          <img src={currentProduct.thumb} alt="" className='cart-info-image'/>
          <div className="cart-info-text">
            <p className='name'>{currentProduct.external}</p>
            <p className='price'>{currentProduct.cheapest}$</p>
          </div>
        </aside>
        <aside className="cart-area-description">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci nisi officiis mollitia laborum tempora, quibusdam omnis, porro et quod quis doloremque consequatur nesciunt vitae?
          </p>
          <p className="gameId">GameID: {currentProduct.gameID}</p>
        </aside>
      </div>
    </main>
  );
};

export default CartView;