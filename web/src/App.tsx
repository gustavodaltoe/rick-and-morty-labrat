import React from 'react';

import Header from './components/Header';
import CharacterList from './components/CharacterList';

import './assets/all.scss';

function App() {
  return (
    <main id="app">
      <Header />
      <CharacterList />
    </main>
  );
}

export default App;
