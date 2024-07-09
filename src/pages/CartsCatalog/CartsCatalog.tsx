import React from 'react';
import Header from '../../components/layout/Header/Header';
import { useGetProductsQuery } from '../../lib/hooks/product.api';

const CartsCatalog = () => {
  const { data } = useGetProductsQuery(1)

  console.log(data)

  return (
    <main className='main'>
      <Header title={null}/>
      <div className="main-catalog">

      </div>
    </main>
  );
};

export default CartsCatalog;
