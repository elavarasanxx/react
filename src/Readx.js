import React from 'react'

function Readx({employees,onEmployeeSelect}) {
  return (
    <div>
        <h3>Employee lists</h3>
        <ol>
            {
                employees.map((emp,index)=>(
                    <li key={index}>
                        {emp.name}, You're {emp.age} from {emp.city}
                        <button onClick={()=>onEmployeeSelect(emp)}>Update</button>
                        <button onClick={()=>onEmployeeSelect(emp)}>Delete</button>
                    </li>
                    
                ))
            }
        </ol>
    </div>
  )
}

export default Readx