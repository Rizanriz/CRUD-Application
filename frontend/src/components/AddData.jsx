import React, { useEffect, useState } from 'react'
import axios from "axios"

const AddData = () => {

    // serverurl = "http://localhost:5000"

    const [input,SetInput] = useState("")
    const [data,SetData] = useState({})

    useEffect(() => {
        const listofdata = axios.get("http://localhost:5000/get",)

        SetData(listofdata)
        console.log(data);
    }, [])
    

    const handleSubmit = () =>{
        const adddata = axios.post("http://localhost:5000/add",{text:input})
        alert("text added")
        SetInput("")
    }
    const handleDelete = () =>{
        const deleteData = axios.delete("http://localhost:5000/delete"+{id})
        alert("text deleted")
    }


  return (
    <div className='flex justify-center text-black'>
       <div className='mt-20' >
        <label className='me-5'>note</label>
        <input type="note" placeholder='add something' className='p-5' 
            onChange={(e)=>SetInput(e.target.value)}
        />
        <button className='p-3 ms-3' onClick={handleSubmit}>Add</button>
       </div>

       <div>
          {/* {
            data.map((note)=>(
                <p>{note.text}</p>
            ))

          } */}
          {/* <button onClick={handleDelete}>DELETE</button> */}
          {/* <button >Update</button> */}
       </div>
    </div>
  )
}

export default AddData