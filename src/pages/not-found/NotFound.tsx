import { NavLink } from 'react-router-dom';

import astronaut from '/assets/astronaut.svg';
import planet from '/assets/planet.svg';

import './Not-found.css';

function NotFound() {
  return (
    <div className="permission_denied">
      <div id="tsparticles"></div>
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page does not exist.
        </h3>
        <img id="astronaut" src={astronaut} />
        <img id="planet" src={planet} />
        <a href="#">
          <NavLink to="/">
            <button className="denied__link">Go Home</button>
          </NavLink>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
