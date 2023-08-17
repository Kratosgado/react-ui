import React from 'react'
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>KgOpinion.com</h1>
    </HeaderContainer>
  )
}

const primaryColor = '#007bff';
const secondarColor = '#0d6153';


// styles for header
const HeaderContainer = styled.header`
  height: ${window.innerHeight * 0.1}px;
  width: 100%;
  background-color: ${primaryColor};
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`