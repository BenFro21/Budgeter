import React, {useState, useEffect} from 'react'
import './BudgetsPage.css'
import {Link} from 'react-router-dom'
import Expense from '../../components/Expense/Expense'
import tokenService from '../../utils/tokenService'
let backURL = 'https://budget-django.herokuapp.com/'

const BudgetsPage = () => {
    useEffect(() => {
        getBudgets()
    }, [])

    let [budgets, setBudgets] = useState([]) 
    let token = tokenService.getToken()
  
    let getBudgets = async () => {
        const budgetRes = await fetch(backURL + 'budgets/', {method: 'GET', headers: new Headers({'content-type': 'application/json', 'authorization':'Bearer ' + token})})
        const budgetData = await budgetRes.json()
        console.log(budgetData)
       return setBudgets(budgetData)
    }
  return (
    <div>
        {budgets?.map(budget => {
            return (<>
                <h3>{budget.title}</h3>
                <h4><button className='edit'><Link to={`/budgets/${budget.id}/`}>{budget.title} Details</Link></button></h4>
                <table>
                    <thead>
                        <tr>
                            <th>Expense Title</th>
                            <th>Biller</th>
                            <th>Type of Bill</th>
                            <th>Amount Budgeted</th>
                            <th>Actual Ammount</th>
                            <th>Difference</th>
                            <th>Total</th>
                            <th>Edit Expense</th>
                            <th>Delete Expense</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { budget.expenses.map(expense => {
                            return <Expense expense={expense} />
                        })}
                    </tbody>
                </table>
            </>)
        })}
    </div>
  )
}

export default BudgetsPage