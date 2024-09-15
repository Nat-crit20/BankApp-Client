import { useContext, useEffect } from "react";
import BasicPie from "../Components/PieChart";
import Context from "../Context";
import { getTransactions } from "../lib/utilities";

const BudgetView = () => {
  const { accountAccess } = useContext(Context);
  useEffect(() => {
    if (accountAccess) {
      getTransactions();
    }
  });
  return (
    <>
      <h1>Budget Tab</h1>
      <BasicPie />
    </>
  );
};
export default BudgetView;
