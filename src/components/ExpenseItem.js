import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

export default function ExpenseItem(props) {
  const title = props.title;
  const amount = props.amount;
  const date = props.date;
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}
