import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <header className="container header">
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/about" className={setActive}>
            About
          </NavLink>
        </header>

        <main className="container main">
          <Outlet />
        </main>

        <footer className="container footer">2023</footer>
      </>
    );
  }
}

export { Layout };
