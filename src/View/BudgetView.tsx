import { useContext, useEffect, useState } from "react";
import BasicPie from "../Components/PieChart";
import Context from "../Context";
import { getTransactions } from "../lib/utilities";
import { Transaction } from "../lib/types";
const BudgetView = () => {
  const { accountAccess } = useContext(Context);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (accountAccess) {
      const loadTransactions = async () => {
        const data: Transaction[] = await getTransactions();
        setTransactions(data);
      };

      // Call the function to load transactions
      loadTransactions();
    }
  }, [accountAccess]);
  return (
    <>
      <h1>Budget Tab</h1>
      <BasicPie />
    </>
  );
};
export default BudgetView;
