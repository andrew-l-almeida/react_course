import {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredTitle: event.target.title
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredAmount: event.target.amount
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredDate: event.target.amount
        })
    }
return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2024-12-31 ' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='subtmit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;