import { useEffect, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chart from "../Components/Chart";
import { Container, Stack } from "@mui/material";

import Context from "../Context";
import { getTransactions } from "../lib/utilities";
import { Transaction } from "../lib/types";
import TransactionTable from "../Components/TransactionTable";

interface Account {
  name: string;
  balances: {
    current: number;
    iso_currency_code: string;
  };
  type: string;
}

function DashboardView() {
  const { accountAccess } = useContext(Context);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  const getAccount = async () => {
    const response = await fetch("http://localhost:3000/api/accounts", {
      method: "GET",
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    console.log(data);
    setAccounts(data.accounts);
    setTotalBalance(0);
    data.accounts.map((account: Account) => {
      setTotalBalance((current) => {
        return current + account.balances.current;
      });
    });
  };
  useEffect(() => {
    if (accountAccess) {
      console.log("Get Account");
      getAccount();
      const loadTransactions = async () => {
        const data: Transaction[] = await getTransactions();
        setTransactions(data);
      };

      // Call the function to load transactions
      loadTransactions();
    }
  }, [accountAccess]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Container maxWidth="md">
        <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
          <Card
            sx={{
              bgcolor: "#ebf3f9",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: 200,
              height: 100,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Balance
              </Typography>
              <Typography
                sx={{ fontSize: 25 }}
                color="text.secondary"
                gutterBottom
              >
                ${totalBalance}
              </Typography>
            </CardContent>
          </Card>
          {accounts ? (
            accounts.map((account) => {
              return (
                <Card
                  sx={{
                    bgcolor: "#ebf3f9",
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    width: 200,
                    height: 100,
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {account.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 25 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {account.balances.iso_currency_code === "USD"
                        ? "$"
                        : "CA$"}
                      {account.balances.current}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <></>
          )}
        </Stack>
        <Chart transactions={transactions} />
      </Container>

      <TransactionTable
        transactions={transactions}
        limit={10}
        dashboard={false}
      />
    </Box>
  );
}
export default DashboardView;
