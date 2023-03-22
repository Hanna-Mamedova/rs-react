import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render(): ReactNode {
    return (
      <header className="header">
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/main">Main</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
