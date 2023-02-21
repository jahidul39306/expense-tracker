import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpenseList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return props.filteredExpenses.map((exp) => (
    <ExpenseItem
      key={exp.id}
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
    />
  ));
}
