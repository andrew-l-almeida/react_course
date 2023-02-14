import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('2021')
    const newFilteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });
    const dateHandler = (year) => {
        setSelectedYear(year)
    }
    let expensesContent = <p>No Expenses</p>

    if(newFilteredExpenses.length !== 0){
        expensesContent = newFilteredExpenses.length === 0 ? (<p>No Expenses</p>) : (newFilteredExpenses.map(expense => (
            <ExpenseItem 
               key={expense.id} 
               title={expense.title} 
               amount={expense.amount} 
               date={expense.date} 
           />
       )))
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected ={selectedYear} onSelectDate={dateHandler}/>
                {expensesContent}
            </Card>
        </div>
    )

}

export default Expenses