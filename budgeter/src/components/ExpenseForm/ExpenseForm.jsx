import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const ExpenseForm = () => {
    const initalState = {  
        budget: '',
        title: '',
        biller: '',
        amount_planned: '',
        amount_actual: '',
        type_bill: '' }
        let [formData, setFormData] = useState({initalState})
        let handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value
            })
        }
        let handleSubmit = async (e) => {
            e.preventDefault()
            try {
                axios.post('http://localhost:8000/expenses', formData)
                .then(res => {
                    setFormData(initalState)
                    // setExpenses(res.data)
                    Navigate('/', {replace:true})
                })
            }catch(err){
                console.log('from handlesubmit in new budget form', err)
            }
        }
        return (
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='budget' value={formData.budget} name='budget' onChange={handleChange} />
                <input type='text' placeholder='title' value={formData.title} name='title' onChange={handleChange} />
                <input type='text' placeholder='biller' value={formData.biller} name='biller' onChange={handleChange} />
                <input type='number' placeholder='amount_planned' value={formData.amount_planned} name='amount_planned' onChange={handleChange} />
                <input type='number' placeholder='amount_actual' value={formData.amount_actual} name='amount_actual' onChange={handleChange} />
                <input type='text' placeholder='type_bill' value={formData.type_bill} name='type_bill' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
      )
    }
    

export default ExpenseForm