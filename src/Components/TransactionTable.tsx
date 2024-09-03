import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { Transaction } from "../lib/types";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 170 },
  { field: "transactionID", headerName: "TransactionId", width: 170 },
  { field: "date", headerName: "Date", width: 170 },
  { field: "status", headerName: "Status", width: 170 },
  { field: "amount", headerName: "Amount", width: 170 },
];

const TransactionTable: React.FC<Transaction> = (transaction) => {
  return <Paper></Paper>;
};
export default TransactionTable;
