import React, {useState, useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'
let backendUrl = 'https://budget-django.herokuapp.com/'




const Expense = ({expense, budgetIncome, budgetId}) => {
let deleteIt = () =>{
  axios.delete(`${backendUrl}/${expense.id}/`)
  Navigate('/budgets', {replace:true})

}
let diff = expense?.amount_planned - expense?.amount_actual 

  return (
    <>      
      <tr>
        <td>{expense?.title}</td>
        <td>{expense?.biller}</td>
        <td>{expense?.type_bill}</td>
        <td>${expense?.amount_planned}</td>
        <td>${expense?.amount_actual}</td>
        <td>{diff}</td> 
        <td>Total</td>    
        <td><button className='edit'><Link to={`/expenses/edit/${expense.id}`}>Edit</Link></button></td>
        <td><button className='destroy' onClick={deleteIt} >Delete Expense</button></td>
      </tr>
    </>

  )
}

export default Expense