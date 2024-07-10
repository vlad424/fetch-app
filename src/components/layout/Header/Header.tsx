import React from 'react';

import './Header.scss'
import { useAppDispatch } from '../../../lib/redux';
import { productSlice } from '../../../lib/reducer/product.slice';

const Header = ({title}: {title: string | null}) => {
  const dispatch = useAppDispatch()
  const { setShow } = productSlice.actions

  return (
    <header className="header">
      {title ? 
        <h1 className='header-title'>{title}</h1>
        :
        <></>
      }
      {!title ? 
        <button className='header-filter-button'
          onClick={() => dispatch(setShow())}
        >
          filter
        </button>
        :
        <></>
      }
    </header>
  );
};

export default Header;