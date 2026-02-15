import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import StudentList from './StudentList';

const AddStudent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    //for localhost
    // let url = "http://localhost:8080/";

    //for deployment
    let url = "/api/";

    const handleAddStudent = async(e) =>{
      e.preventDefault();  
      console.log(name, email, age)
      let response = await fetch(url, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, age})
      })

      response = response.json();
      navigate('/')
    }

  return (
    <div className='text-center'>
      <h2 >Add Student</h2>
      <form>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/><br/><br/>
         <label htmlFor='email'>Email: </label>
        <input type='text' id='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/><br/><br/>
         <label htmlFor='age'>Age: </label>
        <input type='text' id='age' onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age'/><br/><br/>
        <button onClick={handleAddStudent} className='btn-lg green-bg'>Add Student</button>
      </form>
    </div>
  )
}

export default AddStudent
