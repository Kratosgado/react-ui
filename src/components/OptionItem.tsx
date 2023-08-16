import React, { useState } from 'react';
import styled from 'styled-components';

interface StyledCheckboxProps { 
  isChecked: boolean;
  isCorrect: boolean | undefined;
}
interface OptionItemProps extends StyledCheckboxProps{
  text: string;
  onChange: (checked: boolean) => void;
}

export const OptionItem: React.FC<OptionItemProps> = ({ text, isChecked, isCorrect, onChange }) => {
  
  
   const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <CheckboxContainer isChecked={isChecked} isCorrect={isCorrect}>
      <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <StyledCheckbox isChecked={isChecked} isCorrect />
      <CheckboxLabel>{text}</CheckboxLabel>
    </CheckboxContainer>
  );
};

const primaryColor = '#007bff';
const secondarColor = '#0d6153'

const CheckboxContainer = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  max-width: fit-content;
  background-color: ${({ isChecked, isCorrect }) => 
    isChecked ?( isCorrect ? 'green' : 'red') : '#fff'};
  margin: 5px 0;
  padding: 5px;
  border: 1px solid ${primaryColor};
   border-radius: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    background-color: ${primaryColor};
    border-color: ${primaryColor};
  }
`;

const StyledCheckbox = styled.span<StyledCheckboxProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ isChecked, isCorrect }) => 
    isChecked ?( isCorrect ? 'green' : 'red') : '#fff'};
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
`;