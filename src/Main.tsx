import { styled } from "styled-components"
import { RightSideBar } from "./components/RightSideBar"
import { QuestionItem, QuestionItemProps } from "./components/QuestionItem"


export const Main = () => {
   return (
      <MainContainer>
         <RightSideBar />
         <div style={{width: 2, height: 500, backgroundColor: "lightblue", margin:"0px 10px"}}></div>
         <div>
         <h1>General Questions</h1>
            {questions.map(( question, index) => (
            
            <QuestionItem key={index} number={index + 1} {...question} />
            ))}
         </div>
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
   }
 ]

const MainContainer = styled.main`
   display: flex;
   flex-direction: row;
   height: 100%;
   width: 100%;

`