import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { QuestionItem, QuestionItemProps } from './components/QuestionItem';




export default function App() {
  const [isChecked, setIsChecked] = React.useState(false);


  return (
    <div className="App">
      <Header />
      <h1>General Questions</h1>
      {questions.map(( question, index) => (
        <QuestionItem key={index} number={index + 1} {...question} />
      ))}
    </div>
  );
}

const questions: QuestionItemProps[] = [
  {
    question: 'What is the capital of France?',
    options: [
      { text: "London" },
      { text: "Paris", isCorrect: true },
      { text: "Dublin" },
      { text: "Madrid" }
    ]
  },
  {
    question: 'Who is CEO of Tesla?',
    options: [
      { text: "Jeff Bezos" },
      { text: "Elon Musk", isCorrect: true },
      { text: "Bill Gates" },
      { text: "Tony Stark" }
    ]
  },
  {
    question: 'The iPhone was created by which company?',
    options: [
      { text: "Apple", isCorrect: true },
      { text: "Intel" },
      { text: "Amazon" },
      { text: "Microsoft" }
    ]
  }
]