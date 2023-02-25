import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const title = props.title;
  const amount = props.amount;
  const date = props.date;
  return (
    <Card className={styles["expense-item"]}>
      <ExpenseDate date={date} />
      <div className={styles["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={styles["expense-item__price"]}>${amount}</div>
      </div>
    </Card>
  );
}
