import React from 'react'
import { styled } from 'styled-components'
import { primaryColor, secondaryColor } from './constants'


export const LeftSideBar = () => {
   return (
      <SideBarContainer>
         <h2 style={{borderBottom: `2px solid ${primaryColor}`}}>Select Course</h2>
     </SideBarContainer>
   )
}


const SideBarContainer = styled.aside`
   height: 500px;
   width: 20%;
   background-color: ${secondaryColor};
   margin: 10px;
   border: 2px solid ${primaryColor};
   border-radius: 10px;
`