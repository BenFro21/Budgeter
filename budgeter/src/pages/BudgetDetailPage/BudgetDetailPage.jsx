import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import Expense from '../../components/Expense/Expense'
import axios from 'axios'

const BudgetDetailPage = () => {
    let {id} = useParams()
    const [budget, setBudget] = useState()
    useEffect(() => {
        fetch(`http://localhost:8000/budgets/${id}/`)
        .then(res => res.json())
        .then(data => setBudget(data))
    }, [])
    console.log(budget)
    let deleteIt = () => {
        axios.delete(`http://localhost:8000/budgets/${id}/`)
    
    }

  return (
    <div>
        <Link to='/expenses/new'>Add Expense </Link>
        <Link to={`/budgets/delete/${id}/`} >Delete</Link>
        <button onClick={deleteIt}>Delete</button>  
      <table>
            <thead>
                {budget?.title}        
                <tr>
                    <th>Expense Title</th>
                    <th> Biller </th>
                    <th>Type of Bill </th>
                    <th>Amount Budgeted</th>
                    <th>Actual Ammount</th>
                    <th>Edit Expense</th>
                    <th>Delete Expense</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                { budget?.expenses.map((expense, index) => {
                    return <Expense expense={expense} index={index} />
               })}
            </tbody>
        </table>
    </div>
  )
}

export default BudgetDetailPage