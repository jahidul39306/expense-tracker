import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";

export default function Expenses(props) {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  let filteredExpenses = props.expenses;
  if (filterYear !== "all") {
    filteredExpenses = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
