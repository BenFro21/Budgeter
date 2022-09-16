import React, {useState} from 'react'
import './ExpenseForm.css'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const ExpenseForm = () => {
    const initalState = {  
        budget: '',
        title: '',
        biller: '',
        amount_planned: 1,
        amount_actual: 1,
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
                    Navigate('/budgets', {replace:true})
                })
            }catch(err){
                console.log('from handlesubmit in new budget form', err)
            }
        }
        return (
            <form onSubmit={handleSubmit}>
                <label for='budget'>Budget</label>
                <input id='budget' type='text' placeholder='budget' value={formData.budget} name='budget' onChange={handleChange} />
                
                <label for='title'>Title</label>
                <input id='title' type='text' placeholder='title' value={formData.title} name='title' onChange={handleChange} />
               
                <label for='biller'>Biller</label>
                <input id='biller' type='text' placeholder='biller' value={formData.biller} name='biller' onChange={handleChange} />
                
                <label for='amount_planned'>Amount Planned</label>
                <input id='amount_planned' type='number' placeholder='amount_planned' value={formData.amount_planned} name='amount_planned' onChange={handleChange} />
                
                <label for='amount_actual'>Amount Actual</label>
                <input id='amount_actual' type='number' placeholder='amount_actual' value={formData.amount_actual} name='amount_actual' onChange={handleChange} />
                
                <label for='type_bill'>Bill Type</label>
                <select id='type_bill' name='type_bill' onChange={handleChange} value={formData.type_bill} placeholder='type_bill'  >
                <option value='Miscellaneous'>Miscellaneous</option>
                <option value='Car'>Car</option>
                <option value='Electric'>Electric</option>
                <option value='Utilites'>Utilites</option>
                <option value='Grocery'>Grocery</option>
                <option value='Entertainment'>Entertainment</option>
                <option value='Kids'>Kids</option>
                <option value='Pets'>Pets</option>
                </select>
                <br />

                <input type="submit" value="Submit"/>
            </form>
      )
    }
    

export default ExpenseForm