import { PieChart } from "@mui/x-charts/PieChart";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";
interface BasicPieProps {
  transactions: Transaction[];
}
interface PieData {
  id: number;
  value: number;
  label: string;
}

const BasicPie: React.FC<BasicPieProps> = ({ transactions }) => {
  const [pieData, setData] = useState<PieData[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    let monthlySpending = 0;
    const categoryTotals: { [key: string]: number } = {};

    // Loop through transactions to calculate totals
    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      if (currentMonth === transactionDate.getMonth()) {
        const amount = Math.abs(transaction.amount);
        monthlySpending += amount;

        const transactionCat = transaction?.category?.[0] || "Uncategorized";
        categoryTotals[transactionCat] =
          (categoryTotals[transactionCat] || 0) + amount;
      }
    });

    // Prepare pie chart data
    const updatedPieData = Object.entries(categoryTotals).map(
      ([key, value], index) => ({
        id: index + 1,
        value: (value / monthlySpending) * 100,
        label: key,
      })
    );
    setData(updatedPieData);
  }, [transactions]);

  return (
    <PieChart
      series={[
        {
          data: pieData, // Use dynamically generated data
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default BasicPie;
