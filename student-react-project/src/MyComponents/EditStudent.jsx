import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const EditStudent = () => {

        const params = useParams();
        const id = params.id;

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [age, setAge] = useState('');
    
        const navigate = useNavigate();
        

     //for localhost
    // let url = "http://localhost:8080/";

    //for deployment
    let url = "/api/";

    const getStudent = async(id) =>{
        let response = await fetch(url + id);
        response = await response.json();
        console.log(response)
        setName(response.name);
        setEmail(response.email);
        setAge(response.age)
    }   

    useEffect(() =>{
        getStudent(id)
    }, []);

    const handleEditStudent = async(e) =>{
        e.preventDefault()
        console.log("Inside edit student")
        let response = await fetch(url + id, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id, name, email, age})
        })
        
        response = await response.json();
        navigate('/')
    }


  return (
   <div className='text-center'>
      <h2 >Edit Student</h2>
      <form>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' value={name} name='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/><br/><br/>
         <label htmlFor='email'>Email: </label>
        <input type='text' id='email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/><br/><br/>
         <label htmlFor='age'>Age: </label>
        <input type='text' id='age' value={age} name='age' onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age'/><br/><br/>
        <button onClick={handleEditStudent} className='btn green-bg'>Update</button>
      </form>
    </div>
  )
}

export default EditStudent
