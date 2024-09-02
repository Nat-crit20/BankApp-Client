import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import TransactionCard from "../Components/TransactionCard";
import { getTransactions } from "../lib/utilities";
import { Transaction } from "../lib/types";

const TransactionsView = () => {
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
      <h1>Transactions</h1>
      {transactions.map((transaction) => {
        return (
          <div>
            <TransactionCard {...transaction} />
          </div>
        );
      })}
    </>
  );
};
export default TransactionsView;
