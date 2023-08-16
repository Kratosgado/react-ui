import React, { useState } from "react";

import styled from "styled-components";
import { OptionItem } from "./OptionItem";


interface Option {
   text: string;
   isCorrect?: boolean;
}

export interface QuestionItemProps {
   question: string;
   number?: number;
   options: Option[];
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ number, question, options }) => {
   const [selectedOption, setSelectedOption] = useState<string | null>(null);

   return (
      <QuestionContainer>
         <QuestionText>{number}. {question}</QuestionText>
         {options.map((option, index) => (
            <OptionItem
               key={index}
               text={option.text}
               isChecked={selectedOption === option.text}
               isCorrect={option.isCorrect}
               onChange={() => setSelectedOption(option.text)}
            />
         ))}
      </QuestionContainer>
   );
}


const QuestionContainer = styled.div`
   margin-bottom: 20px;
`;

const QuestionText = styled.p`
   font-size: 20px;
   margin-bottom: 10px;
`;