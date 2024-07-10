import React from 'react';

import './Header.scss'
import { useAppDispatch, useAppSelector } from '../../../lib/redux';
import { productSlice } from '../../../lib/reducer/product.slice';
import { Link } from 'react-router-dom';

const Header = ({title}: {title: string | null}) => {
  const dispatch = useAppDispatch()
  const { setShow } = productSlice.actions

  const filterOn = useAppSelector(state => state.productSlice.showLiked)

  return (
    <header className="header">
      {title ? 
        <Link to={'/'}>
          <h1 className='header-title'>{title}</h1>
        </Link>
        :
        <></>
      }
      {!title ? 
        <button className='header-filter-button'
          onClick={() => dispatch(setShow())}
        >
          Фильтрация понравившихся: {filterOn ? 'Включена' : 'Выключена'}
        </button>
        :
        <></>
      }
    </header>
  );
};

export default Header;