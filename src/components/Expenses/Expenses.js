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
    console.log(selectedYear);
  };

  return (
    // Add ExpensesFilter component in Expenses component (parent) (On top of Card).
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={selectYearHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
