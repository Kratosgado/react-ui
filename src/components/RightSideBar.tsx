import React from 'react'
import { styled } from 'styled-components'


export const RightSideBar = () => {
   return (
      <SideBarContainer>
         Side bar
     </SideBarContainer>
   )
}


const SideBarContainer = styled.aside`
   height: 500px;
   width: 20%;
   background-color: red;
   margin: 10px;
   border: 2 solid #342;
   border-radius: 10px;
`