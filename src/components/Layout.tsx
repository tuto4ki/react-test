import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer/Footer';

class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <main className="container main">
          <Outlet />
        </main>

        <Footer />
      </>
    );
  }
}

export { Layout };
