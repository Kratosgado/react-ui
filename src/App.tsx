import React from 'react';

import {WaveAnimation} from './components/WaveAnimation';
import './App.css';
import { Header } from './components/Header';
import { OptionItem } from './components/OptionItem';
import { Circle } from './components/Circle';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Circle /> */}
      <WaveAnimation />
      <OptionItem />
    </div>
  );
}

export default App;
