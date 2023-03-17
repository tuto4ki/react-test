import React from 'react';
import { NavLink } from 'react-router-dom';
import { IRouter, IStatePage } from 'type';
import './Header.css';
const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

class Header extends React.Component<IStatePage> {
  constructor(props: IRouter) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <header className="container header">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export { Header };
