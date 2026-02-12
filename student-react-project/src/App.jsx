import { useState } from 'react'
import './App.css'
import StudentCrud from './MyComponents/StudentCrud'

function App() {
 

  return (
    <div >
     <h1 className='text-center'>This is Student React App</h1><br/><br/>
     <StudentCrud/>
    </div>
  )
}

export default App
