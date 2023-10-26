import React from 'react'
import GroupButton from './Components/GroupButton'
import DropDown from './Components/DropDown';

export default function App() {
  let button_text = ['left', 'middle','right'];
  let options = ['biriyani', 'porotta', 'noodles', 'masala dosa']
  return (
    <div className='App'>
      <GroupButton buttons={button_text} />
      <DropDown opt={options} />
    </div>
  )
}
