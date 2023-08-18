import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { QuestionItem, QuestionItemProps } from './components/QuestionItem';
import { Main } from './Main';




export default function App() {
  const [isChecked, setIsChecked] = React.useState(false);


  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
