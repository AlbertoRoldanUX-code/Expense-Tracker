import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // Forward that year to Expenses component (parent) and store it in a state.
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectYearHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p style={{ color: "white" }}>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    // Add ExpensesFilter component in Expenses component (parent) (On top of Card).
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={selectYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
