import React from 'react';

import './Header.scss'

const Header = ({title}: {title: string | null}) => {
  return (
    <header className="header">
      {title ? 
        <h1 className='header-title'>{title}</h1>
        :
        <></>
      }
      {!title ? 
        <button className='header-filter-button'
          onClick={() => console.log(1)}
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