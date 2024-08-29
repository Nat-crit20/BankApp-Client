import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Transaction } from "../lib/types";

const TransactionCard: React.FC<Transaction> = (transaction) => {
  return (
    <>
      <h1>{transaction.name}</h1>
    </>
  );
};
export default TransactionCard;
