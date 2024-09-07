import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { Transaction } from "../lib/types";

function createData(
  name: string,
  transactionID: string,
  date: string,
  status: number,
  amount: number
) {
  return { name, transactionID, date, status, amount };
}
interface rowData {
  name: string;
  transactionID: string;
  date: string;
  status: number;
  amount: number;
}
interface TableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TableProps> = ({ transactions }) => {
  const [rows, setRow] = useState<rowData[]>([]);

  useEffect(() => {
    if (transactions) {
      setRow([]);
      for (let i = 0; i < transactions.length; i++) {
        setRow((prev) => {
          return [
            ...prev,
            createData(
              transactions[i].name,
              transactions[i].transaction_id,
              transactions[i].date,
              transactions[i].pending ? 1 : 0, // Convert boolean to number
              transactions[i].amount
            ),
          ];
        });
      }
    }
  }, [transactions]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">TransactionID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.transactionID}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
