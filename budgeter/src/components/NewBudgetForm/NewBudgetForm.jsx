import React, { useState } from 'react'
import './NewBudgetForm.css'
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
            <label for='title'>Title</label>
            <input id='title' type='text' placeholder='title' value={formData.title} name='title' onChange={handleChange} />
            
            <label for='date_length'>Date Length</label>
            <input id='date_length' type='text' placeholder='date length' value={formData.date_length} name='date_length' onChange={handleChange} />
            
            <label for='budget_for'>Budget For </label>
            <input id='budget_for' type='text' placeholder='budgets for' value={formData.budget_for} name='budget_for' onChange={handleChange} />
            
            <label for='income'>Income </label>
            <input id='income' type='number' placeholder='income' value={formData.income} name='income' onChange={handleChange} />
            
            {/* <label for='total'>Total</label>
            <input id='total'  type='number' placeholder='total' value={formData.total} name='total' onChange={handleChange} />
            
            <label for='created_by'>Created By</label>
            <input id='created_by' type='text' placeholder='created_by' value={formData.created_by} name='created_by' onChange={handleChange} /> */}
            <br />
            <input type="submit" value="Submit" />
        </form>
  )
}

export default NewBudgetForm