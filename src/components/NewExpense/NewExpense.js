import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles["new-expense"]}>
      {isEditing ? (
        <ExpenseForm addToExpenses={props.addToExpenses} stopEditing={stopEditing}/>
      ) : (
        <button onClick={startEditing}>Add Expense</button>
      )}
    </div>
  );
}
