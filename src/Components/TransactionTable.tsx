import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Transaction } from "../lib/types";

function createData(
  name: string,
  transactionID: string,
  date: string,
  status: number,
  amount: number,
  logo_url: string
) {
  return { name, transactionID, date, status, amount, logo_url };
}
interface rowData {
  name: string;
  transactionID: string;
  date: string;
  status: number;
  amount: number;
  logo_url: string;
}
interface TableProps {
  transactions: Transaction[];
  limit: number;
  dashboard: boolean;
}

const TransactionTable: React.FC<TableProps> = ({
  transactions,
  limit,
  dashboard,
}) => {
  const [rows, setRow] = useState<rowData[]>([]);

  useEffect(() => {
    if (transactions.length > 0) {
      setRow([]);
      for (let i = 0; i <= limit; i++) {
        if (transactions[i] === undefined) {
          return;
        }
        setRow((prev) => {
          console.log(transactions[i]);
          return [
            ...prev,
            createData(
              transactions[i].name,
              transactions[i].transaction_id,
              transactions[i].date,
              transactions[i].pending ? 1 : 0, // Convert boolean to number
              transactions[i].amount,
              transactions[i].logo_url
            ),
          ];
        });
      }
    }
  }, [transactions, limit]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {dashboard ? (
              <>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </>
            ) : (
              <></>
            )}

            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {dashboard ? (
                  row.logo_url ? (
                    <Avatar
                      sx={{
                        m: 1,
                      }}
                      alt={row.name}
                      src={row.logo_url}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        m: 1,
                      }}
                    >
                      {row.name[0]}
                    </Avatar>
                  )
                ) : (
                  <></>
                )}
                {row.name}
              </TableCell>
              {dashboard ? (
                <>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    {row.status ? (
                      <Chip label="Pending" color="primary" />
                    ) : (
                      <Chip label="Complete" color="success" />
                    )}
                  </TableCell>
                </>
              ) : (
                <></>
              )}
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
