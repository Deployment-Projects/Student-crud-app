import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div>
       <ul className='ulStyle'>
        <li ><NavLink to={"/"}>Student List</NavLink></li>
        <li ><NavLink to={"/addStudent"}>Add Student</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
