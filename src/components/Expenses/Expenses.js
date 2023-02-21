import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        filterChangeHandler={filterChangeHandler}
      />
      {expenses.map((exp) => {
        return (
          <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
        );
      })}
    </Card>
  );
}
