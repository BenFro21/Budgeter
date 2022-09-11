import React from 'react'
import budgetService from '../../utils/budgetService'

const BudgetsPage = () => {
    let budgets =budgetService.getBudget()
  return (
    <div>
        <h1>{budgets.title}</h1>
        {/* <ul>
            {budgets.map(budget => {
                return(<>
                <li>{budget.title}</li>
                <li>{budget.created_by}</li>
                </>)
        })}
        </ul> */}

    </div>
  )
}

export default BudgetsPage