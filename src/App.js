import React from 'react'
import GroupButton from './Components/GroupButton'

export default function App() {
  let button_text = ['left', 'middle','right'];
  return (
    <div className='App'>
      <GroupButton buttons={button_text} />
    </div>
  )
}
