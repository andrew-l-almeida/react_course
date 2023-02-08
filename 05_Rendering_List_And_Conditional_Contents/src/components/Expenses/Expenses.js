import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('2021')
    const dateHandler = (year) => {
        setSelectedYear(year)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected ={selectedYear} onSelectDate={dateHandler}/>
                {props.expenses.map(expense => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                })}
            </Card>
        </div>
    )

}

export default Expenses