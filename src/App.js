import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // www.vanderlanth.io
  render() {
    return (
      <div>
        <div className="cursor" />
        <div className="cursor-follower" />
        <div>
          <img alt="Logo" src="" className="logo" />
          <p>
            John Snow is a passionate Freelance Designer. He mainly designs
            websites for agencies, start-ups and individuals. He can also take
            care of the code, sometimes.
          </p>
          <div className="spaceship">🚀</div>
          <ul class="socials">
            <li class="hover cur">
              <a href="mailto:ciao@vanderlanth.io" target="_top" class="social">
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
