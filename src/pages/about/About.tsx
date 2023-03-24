import { Component, ReactNode } from 'react';

import './About.css';

class About extends Component {
  render(): ReactNode {
    return (
      <div className="about">
        <h3>About</h3>
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magnam, quia eius sunt
            cumque dignissimos deserunt temporibus distinctio eos rem quis. Assumenda voluptatibus
            neque fugit aliquam beatae fuga saepe cupiditate.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
