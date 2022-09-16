import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";

import React from 'react'
import { useParams } from "react-router-dom";

const NewExpensePage = () => {
 let {id} = useParams()
  return (
    <div>
        <ExpenseForm id={id}/>
    </div>
  )
}

export default NewExpensePage