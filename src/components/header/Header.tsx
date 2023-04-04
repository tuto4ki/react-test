import { NavLink } from 'react-router-dom';

import { IStatePage } from 'type';
import './Header.css';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');

function Header(props: IStatePage): JSX.Element {
  return (
    <header className="container header">
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About
      </NavLink>
      <NavLink to="/createCard" className={setActive}>
        Create card
      </NavLink>
      <h1>{props.title}</h1>
    </header>
  );
}

export { Header };
