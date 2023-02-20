import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

export default function Expenses(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((exp) => {
        return (
          <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} />
        );
      })}
    </Card>
  );
}
