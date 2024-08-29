import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Transaction {
  amount: number;
  authorized_date: Date;
  category: string[];
  date: Date;
  iso_currency_code: string;
  merchant_name: string;
  name: string;
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
        return (
          <div>
            {transaction.name}
            {transaction.amount}
          </div>
        );
      })}
    </>
  );
};
export default TransactionsView;
