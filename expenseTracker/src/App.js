import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, {useState} from "react";

const INIT_EXPENSES = [
  { id: "e1",title: "Car insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: "e2", title: "groceries", amount: 78, date: new Date(2021, 7, 21) },
  { id: "e3", title: "Stocks", amount: 7999, date: new Date(2021, 12, 13) },
];

function App() {
  
  const [expenses, setExpenses] =useState(INIT_EXPENSES);

  const addBool = false;


  const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses];
      });
  };
  
  return (
    <div>
    <NewExpense active={addBool} onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
