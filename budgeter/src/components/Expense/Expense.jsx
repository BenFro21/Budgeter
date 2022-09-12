import React, {useState, useEffect} from 'react'




const Expense = ({expense}) => {
console.log(expense )

  return (
    
      <tr>
        <td>{expense?.title}</td>
        <td>{expense?.biller}</td>
        <td>{expense?.type_bill}</td>
        <td>{expense?.amount_planned}</td>
        <td>{expense?.amount_actual}</td>
      </tr>
    
  )
}

export default Expense