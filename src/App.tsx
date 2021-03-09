import React from 'react';

import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Header from './components/Header';
import MobileHeader from './components/MobileHeader'
import GlobalStyle from './globalStyle';
import Footer from './components/Footer';
import Routes from './Routes';
import CartProvider from './hooks/cartHook';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const windowWidth = window.innerWidth;
  return (
    <>

      <GlobalStyle />
      <BrowserRouter>
        <ToastContainer />
        <CartProvider>
          <MobileHeader />
          <Routes />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
