import React from 'react'
import styled from 'styled-components';

export const Header = () => {

  const onLoginPressed = () => {
    console.log('login pressed');
  }

  return (
    <HeaderContainer>
      <h2>KgOpinion.com</h2>
      <AccountContainer onClick={onLoginPressed}>
        Login
      </AccountContainer>
    </HeaderContainer>
  )
}

const primaryColor = '#007bff';
const secondarColor = '#32bda6';


// styles for header
const HeaderContainer = styled.header`
  height: ${window.innerHeight * 0.08}px;
  width: 100%;
  background-color: ${primaryColor};
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${secondarColor};
  border-radius: 10px;
`

const AccountContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  margin-right: 10px;
  padding: 5px;
  background-color: #fff;
  color: ${secondarColor};
  border-color: ${secondarColor};


`