import { PieChart } from "@mui/x-charts/PieChart";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";
interface BasicPieProps {
  transactions: Transaction[];
}

const BasicPie: React.FC<BasicPieProps> = ({ transactions }) => {
  const [categories, setCategories] = useState({});
  const [data, setData] = useState([]);
  const [totalMonthlySpending, setTotalMonthlySpending] = useState<number>(0);
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    setTotalMonthlySpending(0);
    for (let i = 0; i < transactions.length; i++) {
      const transactionDate = new Date(transactions[i].date);
      if (currentMonth === transactionDate.getMonth()) {
        setTotalMonthlySpending((prev) => {
          if (prev) {
            return (prev += Math.abs(transactions[i].amount));
          }
        });
      } else {
        break;
      }
    }
    for (let j = 0; j < transactions.length; j++) {
      const transactionDate = new Date(transactions[j].date);
      if (currentMonth === transactionDate.getMonth()) {
        const transactionCat = transactions[j]?.category?.[0];
        const catValue = categories[transactionCat] || 0;
        const amount = Math.abs(transactions[j].amount);
        // console.log("Categories", transactionCat);
        setCategories((prevCategories) => ({
          ...prevCategories,
          [transactionCat]: catValue + amount, // Fix: Use computed property for category
        }));
      }
    }
  }, [transactions]);
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
            { id: 3, value: 20, label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};
export default BasicPie;
