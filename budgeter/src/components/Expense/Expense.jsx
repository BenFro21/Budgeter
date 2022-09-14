import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'




const Expense = ({expense, index}) => {
let deleteIt = () =>{
  axios.delete(`http://localhost:8000/expenses/${expense.id}/`)
}


  return (
    <>      
      <tr>
        <td>{expense?.title}</td>
        <td>{expense?.biller}</td>
        <td>{expense?.type_bill}</td>
        <td>{expense?.amount_planned}</td>
        <td>{expense?.amount_actual}</td>
        <td><Link to={`/expenses/edit/${expense.id}`}>Edit</Link></td>
        <td><button onClick={deleteIt} >Delete Expense</button></td>
      </tr>
    </>

  )
}

export default Expense