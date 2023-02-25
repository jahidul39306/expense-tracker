import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

export default function ExpenseList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className={styles["expenses-list__fallback"]}>Found no expenses.</h2>;
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
