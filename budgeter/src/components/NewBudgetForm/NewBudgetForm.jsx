import React, { useState } from 'react'

const NewBudgetForm = () => {
    let [budget, setBudget] = useState({
        title: '',
        date_length: '',
        budget_for: '',
        income: '',
        total: '',
        created_by: ''    
    })
    let handleChange = (e) => {
        setBudget({
            ...budget, [e.target.name]: e.target.value
        })
    }
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {

        }catch(err){
            console.log('from handlesubmit in new budget form', err)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' value={budget.title} name='title' onChange={handleChange} />
            <input type='dropbox' placeholder='date_length' value={budget.date_length} name='date_length' onChange={handleChange} />
            <input type='text' placeholder='budget_for' value={budget.budget_for} name='budget_for' onChange={handleChange} />
            <input type='number' placeholder='income' value={budget.income} name='income' onChange={handleChange} />
            <input type='number' placeholder='total' value={budget.total} name='total' onChange={handleChange} />
            <input type='dropbox' placeholder='created_by' value={budget.created_by} name='created_by' onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default NewBudgetForm