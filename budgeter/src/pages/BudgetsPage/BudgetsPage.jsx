import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import budgetService from '../../utils/budgetService'
import Expense from '../../components/Expense/Expense'
import tokenService from '../../utils/tokenService'
let backURL = 'http://localhost:8000/'

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
                <h4><Link to={`/budgets/${budget.id}/`}>{budget.title} Details</Link></h4>
                <table>
                    <thead>
                        <tr>
                            <th>Expense Title</th>
                            <th>Biller</th>
                            <th>Type of Bill</th>
                            <th>Amount Budgeted</th>
                            <th>Actual Ammount</th>
                            <th>Edit Expense</th>
                            <th>Delete Expense</th>
                        </tr>
                    </thead>
                    <tbody>
                        { budget.expenses.map(expense => {
                            return <Expense expense={expense} />
                        })}
                        <td>{budget.total}</td>
                    </tbody>
            {/* reduce budgets.expenses to sum up total  */}  
                </table>
            </>)
        })}
    </div>
  )
}

export default BudgetsPage