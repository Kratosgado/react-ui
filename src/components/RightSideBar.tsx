import React from 'react'
import { styled } from 'styled-components'
import { primaryColor, secondaryColor } from './constants'


export const RightSideBar = () => {
   return (
      <SideBarContainer>
         <h2 style={{ borderBottom: `2px solid ${secondaryColor}` }}>Select Specific Topic</h2>
     </SideBarContainer>
   )
}


const SideBarContainer = styled.aside`
   height: 500px;
   width: 20%;
   background-color: ${primaryColor};
   margin: 10px;
   border: 2px solid ${secondaryColor};
   border-radius: 10px;
`