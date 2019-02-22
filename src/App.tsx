// www.vanderlanth.io
import React, { Component } from 'react';
import './App.css';
import square from './assets/icons/3d.svg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="cursor" />
        <div className="cursor-follower" />
        <div className="page__container">
          <img src={square} alt="Logo" className="logo" />
          <p>
            Nicolas Lanthemann is a passionate Freelance Designer. He mainly
            designs websites for agencies, start-ups and individuals. He can
            also take care of the code, sometimes.
          </p>
          <div className="spaceship">🚀</div>
          <ul className="socials">
            <li className="hover cur">
              <a
                href="mailto:ciao@vanderlanth.io"
                target="_top"
                className="social"
              >
                Mail
              </a>
            </li>
            <li className="hover cur">
              <a href="#" target="_blank" className="social">
                Dribbble
              </a>
            </li>
            <li className="hover cur">
              <a href="#" target="_blank" className="social">
                Github
              </a>
            </li>
            <li className="hover cur">
              <a href="#" target="_blank" className="social">
                Codepen
              </a>
            </li>
            <li className="hover cur">
              <a href="#" target="_blank" className="social">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
