import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
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
          <li>
            <NavLink to="/forms">Forms</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
