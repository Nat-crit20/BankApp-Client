import { PieChart } from "@mui/x-charts/PieChart";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";
interface BasicPieProps {
  transactions: Transaction[];
}
interface Categories {
  label: string;
  value: number;
}

const BasicPie: React.FC<BasicPieProps> = ({ transactions }) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [totalMonthlySpending, setTotalMonthlySpending] = useState<number>();
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth;
    setTotalMonthlySpending(0);
    for (let i = 0; i < transactions.length; i++) {
      const transactionDate = new Date(transactions[i].date);
      if (currentMonth === transactionDate.getMonth) {
        setTotalMonthlySpending((prev) => {
          if (prev) {
            return (prev += Math.abs(transactions[i].amount));
          }
        });
      }
    }
  });
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};
export default BasicPie;
