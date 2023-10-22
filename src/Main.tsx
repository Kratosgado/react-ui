import { styled } from "styled-components"
import { RightSideBar } from "./components/RightSideBar"
import { QuestionItem, QuestionItemProps } from "./components/QuestionItem"
import { LeftSideBar } from "./components/LeftSideBar"
import { useState } from "react"


export const Main = () => {
  // const [selectedCourse, setSelectedCourse] = useState("No course selected");



   return (
      <MainContainer>
         <LeftSideBar />
         <div style={{width: 2, height: window.Infinity, backgroundColor: "lightblue", margin:"0px 10px"}}></div>
       <div style={{ width: "50%"}}>
            <h1>General Questions</h1>
            {questions.map(( question, index) => (
            
            <QuestionItem key={index} number={index + 1} {...question} />
            ))}
        </div>
        <div style={{width: 2, height: window.Infinity, backgroundColor: "lightblue", margin:"0px 10px"}}></div>

        <RightSideBar />
      </MainContainer>
   )
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
  },
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
  },
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
 },
 ]

const MainContainer = styled.main`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   height: 100%;
   width: 100%;

`