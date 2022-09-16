import React, {useState, useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'




const Expense = ({expense, budgetIncome}) => {
let deleteIt = () =>{
  axios.delete(`http://localhost:8000/expenses/${expense.id}/`)
  Navigate('/budgets', {replace:true})

}
console.log(expense)
let diff = expense?.amount_planned - expense?.amount_actual 
let total = budgetIncome - diff

  return (
    <>      
      <tr>
        <td>{expense?.title}</td>
        <td>{expense?.biller}</td>
        <td>{expense?.type_bill}</td>
        <td>${expense?.amount_planned}</td>
        <td>${expense?.amount_actual}</td>
        <td>{diff}</td> 
        <td>{total}</td>    
        <td><button className='edit'><Link to={`/expenses/edit/${expense.id}`}>Edit</Link></button></td>
        <td><button className='destroy' onClick={deleteIt} >Delete Expense</button></td>
      </tr>
    </>

  )
}

export default Expense