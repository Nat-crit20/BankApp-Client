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
  //   const [spendingByMonth, setSpendingByMonth] = useState<Dataset>({});
  const [spendingByWeek, setSpendingByWeek] = useState<Dataset>({});
  useEffect(() => {
    if (transactions) {
      const aggregatedData = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.date);
        const weekNumber = getWeekNumber(date);
        const year = date.getFullYear();
        const key = `${year}-W${weekNumber}`;
        if (!acc[key]) acc[key] = 0;
        acc[key] += transaction.amount;

        return acc;
      }, {} as Dataset);

      setSpendingByWeek(aggregatedData);
    }
  }, [transactions]);

  const getWeekNumber = (date: Date): number => {
    // Copy the date to avoid modifying the original date
    const tempDate = new Date(date.getTime());

    // Set the date to the nearest Thursday (ISO week date standard)
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));

    // Get the first Thursday of the year
    const firstThursday = new Date(tempDate.getFullYear(), 0, 4);

    // Calculate the week number
    const weekNumber = Math.ceil(
      ((tempDate.getTime() - firstThursday.getTime()) / 86400000 + 1) / 7
    );

    return weekNumber;
  };
  return (
    <BarChart
      dataset={Object.keys(spendingByWeek).map((key) => {
        return {
          week: key, // This will be something like "2024-W9"
          value: spendingByWeek[key], // This is the total spending for that week
        };
      })}
      xAxis={[{ scaleType: "band", dataKey: "week" }]} // x-axis represents weeks
      series={[
        { dataKey: "value", label: "Total Spending", stack: "spending" },
      ]}
      {...chartSetting}
    />
  );
};
export default Chart;
