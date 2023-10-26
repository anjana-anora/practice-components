import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

export default function DropDown(props) {

    let options = props.opt;
    const [opt,setOpt] = useState('Click to choose');
    const [show,setShow] = useState('none');

    const StyledMenu = styled.button`
        width: 152px;
    `

    const StyledOptions = styled.div`
        background-color: aliceblue;
        width: 150px;
        border-bottom: 1px solid #111;
        border-left: 1px solid #111;
        border-right: 1px solid #111;
    `


  return (
    <div className='drop_down'>
        <StyledMenu onClick={()=>( show=='none')? setShow('block'):setShow('none') }>{opt}🔽</StyledMenu>
      
      <div className='options' style={{display: show }}>
        {options.map((val, index)=>{
            return (
                    <StyledOptions key={index} onClick={()=>{
                    setOpt(val);
                    setShow('none');
                    console.log(index);
                    }}>{val}</StyledOptions>                
            );
        })}
      </div>
    </div>
  )
}
