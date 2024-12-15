import React from 'react'

const EditData = () => {

    const handledit = () =>{
        const updateData = axios.delete("http://localhost:5000/update"+{id})
        alert("text updated")
    }

    
    
  return (
    <div>
        <div className='mt-20' >
        <input type="text" placeholder='add something' className='p-5' 
            onChange={(e)=>SetInput(e.target.value)}
        />
        <button className='p-3 ms-3' onClick={handledit}>edit</button>
       </div>
    </div>
  )
}

export default EditData