import { useContext, useEffect, useState } from "react";
import Context from "../Context";

interface Transaction {
  amount: number;
  authorized_date: Date;
  category: string[];
  date: Date;
  iso_currency_code: string;
  merchant_name: string;
  payment_channel: string;
  pending: boolean;
  personal_finance_category: {
    confidence_level: string;
    detailed: string;
    primary: string;
  };
  transaction_id: string;
  website: string;
}

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
        return <div>{transaction.amount}</div>;
      })}
    </>
  );
};
export default TransactionsView;
