import { useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.random(),
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.addToExpenses(formData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelHandler = () =>{
    props.stopEditing();
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={titleChangeHandler} />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            name="amount"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input type="date" name="date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="submit">Add Expense</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </form>
  );
}
