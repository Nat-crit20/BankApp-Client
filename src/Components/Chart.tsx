import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

interface ChartProps {
  transactions: Transaction[];
}
type Dataset = Record<string, number>;
const Chart: React.FC<ChartProps> = ({ transactions }) => {
  const [spendingByMonth, setSpendingByMonth] = useState<Dataset>({});

  useEffect(() => {
    if (transactions) {
      const aggregatedData = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.date);
        const monthNumber = date.getMonth() + 1;
        const year = date.getFullYear();
        const key = `${year}-M${monthNumber}`;
        if (!acc[key]) acc[key] = 0;
        acc[key] += transaction.amount;

        return acc;
      }, {} as Dataset);

      setSpendingByMonth(aggregatedData);
    }
  }, [transactions]);
  return (
    <BarChart
      dataset={Object.keys(spendingByMonth).map((key) => {
        return {
          month: key, // This will be something like "2024-M9"
          value: spendingByMonth[key], // This is the total spending for that month
        };
      })}
      xAxis={[{ scaleType: "band", dataKey: "month" }]} // x-axis represents months
      series={[
        { dataKey: "value", label: "Total Spending", stack: "spending" },
      ]}
      {...chartSetting}
    />
  );
};
export default Chart;
