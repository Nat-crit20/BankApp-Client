import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Transaction } from "../lib/types";

const TransactionCard: React.FC<Transaction> = (transaction) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {transaction.name}
        </Typography>
        <Typography variant="h5" component="div">
          {transaction.amount}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default TransactionCard;
