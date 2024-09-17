import { PieChart } from "@mui/x-charts/PieChart";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";
interface BasicPieProps {
  transactions: Transaction[];
}
interface Categories {}

const BasicPie: React.FC<BasicPieProps> = ({ transactions }) => {
  const [categories, setCategories] = useState([]);
  const [totalMonthlySpending, setTotalMonthlySpending] = useState<number>();
  useEffect(() => {});
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
