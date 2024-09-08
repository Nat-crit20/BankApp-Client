import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";

const chartSetting = {
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
type Dataset = Record<string, { expense: number; income: number }>;
const Chart: React.FC<ChartProps> = ({ transactions }) => {
  //   const [spendingByMonth, setSpendingByMonth] = useState<Dataset>({});
  const [spendingByWeek, setSpendingByWeek] = useState<Dataset>({});
  useEffect(() => {
    if (transactions) {
      const aggregatedData = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.date);
        const weekNumber = getWeekNumber(date);
        const currentDate = new Date();
        const year = date.getFullYear();
        if (year !== currentDate.getFullYear()) {
          return acc;
        }

        const key = `${year}-W${weekNumber}`;
        // Skip if the transaction belongs to "INCOME"
        console.log("Log transaction", transaction.category);
        if (
          transaction.category &&
          transaction.category.includes &&
          transaction.category.includes("Income")
        ) {
          if (!acc[key])
            acc[key] = {
              expense: 0,
              income: 0,
            };

          acc[key].income += transaction.amount; // Add income amount
          return acc;
        }

        if (!acc[key])
          acc[key] = {
            expense: 0,
            income: 0,
          };

        acc[key].expense += transaction.amount; // Add expense amount

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
          income: Math.abs(spendingByWeek[key]["income"]), // This is the total spending for that week
          expense: Math.abs(spendingByWeek[key]["expense"]), // This is the total spending for that week
        };
      })}
      xAxis={[{ scaleType: "band", dataKey: "week" }]} // x-axis represents weeks
      series={[
        { dataKey: "expense", label: "Expense" },
        { dataKey: "income", label: "Income" },
      ]}
      {...chartSetting}
    />
  );
};
export default Chart;
