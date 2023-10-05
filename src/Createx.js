import React, { useState } from 'react'

function Createx({onEmployeeCreate}) {
    const[newEmployee,setNewEmployee] = useState({name:'',age:'',city:''})
    const addEmployee = ()=>{
        if(newEmployee.name!=='' && newEmployee.age!=='' && newEmployee.city !==''){
            onEmployeeCreate(newEmployee);
            setNewEmployee({name:'',age:'',city:''})
        }
    }
  return (
    <div>
        <input type='text' placeholder='Add Name' value={newEmployee.name} onChange={(e)=>setNewEmployee({...newEmployee,name:e.target.value})} />
        <input type='number' placeholder='Add Age' value={newEmployee.age} onChange={(e)=>setNewEmployee({...newEmployee,age:e.target.value})} />
        <input type='text' placeholder='Add City' value={newEmployee.city} onChange={(e)=>setNewEmployee({...newEmployee,city:e.target.value})} />
        <button onClick={addEmployee}>Add</button>
    </div>
  )
}

export default Createx