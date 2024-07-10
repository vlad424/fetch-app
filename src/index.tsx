import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './lib/store';
import CartsCatalog from './pages/CartsCatalog/CartsCatalog';
import CartView from './pages/CartView/CartView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <CartsCatalog/>
  },
  {
    path: '/cart',
    element: <CartView/>
  }
])

const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);