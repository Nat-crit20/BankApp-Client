import { PieChart } from "@mui/x-charts/PieChart";
import { Transaction } from "../lib/types";


const BasicPie: = ({transactions})=> {
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
}
export default BasicPie