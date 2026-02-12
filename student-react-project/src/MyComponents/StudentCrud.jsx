import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import StudentList from './StudentList'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

const StudentCrud = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<StudentList/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/editStudent/:id' element={<EditStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default StudentCrud
