import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const expenses = props.items;

  const [selectedYear, setSelectedYear] = useState("2019");

  const changeFilterHandler = (value) => {
    setSelectedYear(value);
  };

  const filteredExpenses = expenses.filter( e => {
    console.log(e.date  + " prop date");

      return e.date.getFullYear()==selectedYear;
  });
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
