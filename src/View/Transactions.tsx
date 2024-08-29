import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import TransactionCard from "../Components/TransactionCard";
import { Transaction } from "../lib/types";

const TransactionsView = () => {
  const { accountAccess } = useContext(Context);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactions = async () => {
    const response = await fetch("http://localhost:3000/api/transactions", {
      method: "GET",
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setTransactions(data.latest_transactions);
  };
  useEffect(() => {
    if (accountAccess) {
      getTransactions();
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
