import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('2021')

    const newFilteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });
    const dateHandler = (year) => {
        setSelectedYear(year)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected ={selectedYear} onSelectDate={dateHandler}/>
                <ExpensesList items={newFilteredExpenses} />
            </Card>
        </div>
    )

}

export default Expenses