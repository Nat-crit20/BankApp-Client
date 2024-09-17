import { useContext, useEffect, useState } from "react";
import Context from "../Context";

import { getTransactions } from "../lib/utilities";
import { Transaction } from "../lib/types";
import TransactionTable from "../Components/TransactionTable";

const TransactionsView = () => {
  const { accountAccess } = useContext(Context);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (accountAccess) {
      const loadTransactions = async () => {
        const data: Transaction[] = await getTransactions();
        console.log("Transaction data", data);
        setTransactions(data);
      };

      // Call the function to load transactions
      loadTransactions();
    }
  }, [accountAccess]);
  return (
    <>
      <h1>Transactions</h1>

      <TransactionTable
        transactions={transactions}
        limit={10}
        dashboard={true}
      />
    </>
  );
};
export default TransactionsView;
