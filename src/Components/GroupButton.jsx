import React from 'react'
import styled from 'styled-components';

export default function GroupButton(props) {
  let gButtons = props.buttons;

  const ButtonBox = styled.div`
    display  : flex;
    justify-content: center;
    margin: auto;
    margin-top: 5%;
    padding: 0;
  `
  const StyledButton = styled.button`
  background-color: white;
  padding  : 3vh 6vh;
  font-size: 20px;
  border-width: 1px;
  text-transform: capitalize;
  cursor: pointer;
  
  &:hover{
    background-color: #b5d8f7;
    text-shadow: 1px 1px #696969;
  }
`
  return (
    <ButtonBox>
      {gButtons.map((bText, index)=>{
        return <StyledButton key={index} >{bText}</StyledButton>
      })}
    </ButtonBox>
  )
}
