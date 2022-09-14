import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import tokenService from '../../utils/tokenService'


const NewBudgetForm = () => {
   let {id} = useParams()
   let token = tokenService.getToken()
    const initalState = {  
    title: '',
    date_length: '',
    budget_for: '',
    income: '',
    total: '',
    created_by: '',
    expenses: [], 
}
    let [formData, setFormData] = useState(initalState)
    let handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value
        })
    }
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:8000/budgets/', formData, {headers: {'content-type': 'application/json', token: token}})
            .then(res => {
                setFormData(initalState)
                // setBudgets(res.data)
                Navigate('/', {replace:true})
            })
        }catch(err){
            console.log('from handlesubmit in new budget form', err)
        }
    }
  return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' value={formData.title} name='title' onChange={handleChange} />
            <input type='dropbox' placeholder='date_length' value={formData.date_length} name='date_length' onChange={handleChange} />
            <input type='text' placeholder='budgets_for' value={formData.budget_for} name='budget_for' onChange={handleChange} />
            <input type='number' placeholder='income' value={formData.income} name='income' onChange={handleChange} />
            <input type='number' placeholder='total' value={formData.total} name='total' onChange={handleChange} />
            <input type='dropbox' placeholder='created_by' value={formData.created_by} name='created_by' onChange={handleChange} />
            <input hidden={true} value={id}/>
            <button type='submit'>Submit</button>
        </form>
  )
}

export default NewBudgetForm