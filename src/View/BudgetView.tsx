import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import BasicPie from "../Components/PieChart";
import Context from "../Context";
import { getTransactions } from "../lib/utilities";
import { Transaction } from "../lib/types";
import BudgetModal from "../Components/BudgetModal";
import BudgetCard from "../Components/BudgetCard";
const style = {
  display: "flex",
};

type Goal = {
  category: string;
};
const BudgetView = () => {
  const { accountAccess } = useContext(Context);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

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

      <Box sx={style}>
        <BasicPie transactions={transactions} />
        <Box>
          <BudgetModal />
          <BudgetCard />
          <BudgetCard />
          <BudgetCard />
        </Box>
      </Box>
    </>
  );
};
export default BudgetView;
