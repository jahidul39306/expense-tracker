import Card from "../UI/Card";
import styles from "./Expenses.module.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import Chart from "../Chart/Chart";

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
    <Card className={styles["expenses"]}>
      <Chart filteredExpenses={filteredExpenses} />
      <ExpensesFilter
        selected={filterYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
