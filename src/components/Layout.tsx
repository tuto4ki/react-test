import React from 'react';
import { Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <main className="container main">
          <Outlet />
        </main>

        <footer className="container footer">2023</footer>
      </>
    );
  }
}

export { Layout };
