import React, {useState, useEffect} from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Expense from '../../components/Expense/Expense'
import axios from 'axios'
import "./BudgetDetailPage.css"

const BudgetDetailPage = () => {
    let {id} = useParams()
    const [budget, setBudget] = useState()
    useEffect(() => {
        fetch(`http://localhost:8000/budgets/${id}/`)
        .then(res => res.json())
        .then(data => setBudget(data))
    }, [])
    let deleteIt = () => {
        axios.delete(`http://localhost:8000/budgets/${id}/`)
        Navigate('/budgets', {replace:true})

    }

  return (
    <div>
        <h3>{budget?.title}</h3>
        <h4>${budget?.income}</h4>        

      <table>
            <thead>
                <tr>
                    <th>Expense Title</th>
                    <th> Biller </th>
                    <th>Type of Bill </th>
                    <th>Amount Budgeted</th>
                    <th>Actual Ammount</th>
                    <th>Edit Expense</th>
                    <th>Delete Expense</th>
                    <th>Difference</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                { budget?.expenses.map((expense, index) => {
                    return <Expense expense={expense} index={index} budgetIncome={budget?.income} />
               })}
            </tbody>
        </table>
        <button className='destroy' onClick={deleteIt}>Delete</button>  
        <button className='edit' ><Link to='/expenses/new'>Add Expense </Link></button>

    </div>
  )
}

export default BudgetDetailPage