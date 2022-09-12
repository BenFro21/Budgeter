import React, {useState, useEffect} from 'react'
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
                <h2>{budget.title}</h2>
                <table>
                <thead>
                <tr>
                    <th>Expense Title</th>
                    <th> Biller </th>
                    <th>Type of Bill </th>
                    <th>Amount Budgeted</th>
                    <th>Actual Ammount</th>
                </tr>
            </thead>
            <tbody>

                
                { budget.expenses.map(expense => {
                    return <Expense expense={expense} />
               })}
            </tbody>
            {/* reduce budgets.expenses to sum up total  */}
    
        </table>
            </>)
            
            })}
      

    </div>
  )
}

export default BudgetsPage