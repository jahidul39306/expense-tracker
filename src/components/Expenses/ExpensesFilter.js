import styles from "./ExpensesFilter.module.css";

export default function ExpensesFilter(props) {
  const onSelectYear = (event) => {
    props.filterChangeHandler(event.target.value);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onSelectYear}>
          <option value="all">All</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
