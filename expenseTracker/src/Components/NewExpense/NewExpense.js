import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";
const NewExpense = (props) => {

    const [active, setActive] = useState(props.active)

    const onActivateHandler = () => {
        setActive(true);
    }

    const deactivateForm = () => {
        setActive(false);
    }


    if(active===false){
        return (
            <div className="new-expense">
                <button onClick={onActivateHandler}>Add expense</button>
            </div>
        )
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setActive(false);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onDeactivate={deactivateForm} onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;