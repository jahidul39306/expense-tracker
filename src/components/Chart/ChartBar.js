import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxAmount > 0) {
    barFillHeight = Math.round((props.amount / props.maxAmount) * 100) + "%";
  }
  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.month}</div>
    </div>
  );
};
export default ChartBar;
