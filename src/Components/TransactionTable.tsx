import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { Transaction } from "../lib/types";

const columns: GridColDef[] = [];

const TransactionTable: React.FC<Transaction> = (transaction) => {
  return <Card sx={{ minWidth: 275 }}></Card>;
};
export default TransactionTable;
