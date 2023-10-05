import React, { useState } from 'react'

function updatex(employee,onUpdate) {
    const[editEmployee,setEditEmployee] = useState({...employee});

    const updateEmployee = ()=>{
        if(editEmployee.name !=='' && editEmployee.age !=='' && editEmployee.name !==''){
            onUpdate(editEmployee);
        }
    };

  return (
    <div>
         <input type='text' placeholder='Add Name' value={editEmployee.name} onChange={(e)=>setEditEmployee({...newEmployee,name:e.target.value})} />
        <input type='number' placeholder='Add Age' value={editEmployee.age} onChange={(e)=>setEditEmployee({...newEmployee,age:e.target.value})} />
        <input type='text' placeholder='Add City' value={editEmployee.city} onChange={(e)=>setEditEmployee({...newEmployee,city:e.target.value})} />
        <button onClick={updateEmployee}>Change</button>
    </div>
  )
}

export default updatex