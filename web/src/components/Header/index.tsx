import React from 'react';

import '../../assets/glitchin.scss';
import './styles.scss';

import logo from '../../assets/rick_and_morty.png';

function Header() {
  return (
    <header id="page-header">
      <img srcSet={logo} alt="Rick and Morty" />
      <h1 className="glitch title" data-text="RICK AND MORTY">
        RICK AND MORTY
      </h1>
      <p>Show me what you got!</p>
    </header>
  );
}

export default Header;
