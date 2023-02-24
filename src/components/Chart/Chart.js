import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const filterdExpenses = props.filteredExpenses;
  const barValues = [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 0 },
    { month: "Apr", amount: 0 },
    { month: "May", amount: 0 },
    { month: "Jun", amount: 0 },
    { month: "Jul", amount: 0 },
    { month: "Aug", amount: 0 },
    { month: "Sep", amount: 0 },
    { month: "Oct", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Dec", amount: 0 },
  ];
  filterdExpenses.map((exp) => {
    let month = exp.date.getMonth(); // starting at 0 => January => 0
    let amount = exp.amount;
    barValues[month].amount += amount;
  });
  const amountValus = barValues.map((val) => val.amount);
  const maxAmount = Math.max(...amountValus);
  return (
    <div className="chart">
      {barValues.map((point) => (
        <ChartBar
          key={point.month}
          amount={point.amount}
          maxAmount={maxAmount}
          month={point.month}
        />
      ))}
    </div>
  );
};
export default Chart;
