import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { Transaction } from "../lib/types";
import { useEffect, useState } from "react";
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Feb",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Mar",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Apr",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "May",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "June",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "July",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "Aug",
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: "Sept",
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: "Oct",
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: "Nov",
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: "Dec",
  },
];
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

const valueFormatter = (value: number | null) => `${value}mm`;
interface ChartProps {
  transactions: Transaction[];
}
type Dataset = Record<string, number>;
const Chart: React.FC<ChartProps> = ({ transactions }) => {
  const [spendingByMonth, setSpendingByMonth] = useState({});

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
      dataset={spendingByMonth}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={}
      {...chartSetting}
    />
  );
};
export default Chart;
