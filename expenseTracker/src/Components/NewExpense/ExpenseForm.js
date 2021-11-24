import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState( {
  //     eneteredTitle='',
  //     enteredAmount='',
  //     enteredDate='',
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput( (prevState) => {
    //     return {
    //         ...prevState,
    //         eneteredTitle: event.target.value
    //     }
    // });
  };
  const amountChangeListener = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput( (prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount: event.target.value
    //     }
    // });
  };
  const dateChangeListener = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput( (prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value
    //     }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +eneteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");

    props.onSaveExpenseData(expenseData);
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={eneteredAmount}
            onChange={amountChangeListener}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeListener}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onDeactivate}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
