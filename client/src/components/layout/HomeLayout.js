import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter';
import Header from './Header';

function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>
      <Header/>

      <AppRouter/>

      <div className="footer">
        <p>Developed by <a href="https://github.com/shrish-mohapatra" target="_blank">Shrish Mohapatra</a></p>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default Layout;