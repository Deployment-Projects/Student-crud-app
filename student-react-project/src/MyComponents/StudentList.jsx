import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const StudentList = () => {

    const [studentData, setStudentData] = useState([]);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

     //for localhost
    // let url = "http://localhost:8080/";

    //for deployment
    let url = "/api/";

    useEffect(()=>{
        setLoading(true);
        getStudentList();
    },[])

    const getStudentList = async() =>{
        let response = await fetch(url);
        response = await response.json();
        console.log(response)
        setStudentData(response);
        setLoading(false);
    }

    const handleDelete = async(id) =>{
      console.log(id)
        let response = await fetch(url + id, {
          method: 'delete'
        })
        response = await response.json()
        getStudentList();
        console.log(response)
    }

    const handleEdit = (id) =>{
      navigate('/editStudent/'+ id)
    }


  return (
    <div>
      <h2 className='text-center underline green-color'>Student List</h2>
        {
            !loading?
            studentData && studentData.map((student)=>(
               <ul key={student.id} className='blue-color'>
                    <li>Id: {student.id}</li>
                    <li>Name: {student.name}</li>
                    <li>Email: {student.email}</li>
                    <li>Age: {student.age}</li>
                    <br/>
                    <button onClick={()=>handleDelete(student.id)} style={{marginRight:'5px'}} className='btn red-bg'>Delete</button>
                    
                    <button onClick={()=>handleEdit(student.id)} className='btn green-bg'>Edit</button>

                    <hr/>
                    
               </ul>
            ))
            : "Loading..."
        }
    </div>
  )
}

export default StudentList
