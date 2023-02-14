import './NewExpense.css'
import { useState } from 'react'

import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false)

    const startEditingHandler = () => {
        setIsAdding(true)
    }
    const stopEditingHandler = () => {
        setIsAdding(false)
    }


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            {!isAdding && <button type='' onClick={startEditingHandler}>Add new Expense</button>}
            {isAdding && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense