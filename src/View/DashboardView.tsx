import { useEffect, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "../Components/Link";
import Context from "../Context";

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
  };
  useEffect(() => {
    if (accountAccess) {
      console.log("Get Account");
      getAccount();
    }
  }, [accountAccess]);

  return (
    <Box>
      <Link />
      {accounts ? (
        accounts.map((account) => {
          return (
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {account.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {account.balances.iso_currency_code === "USD" ? "$" : "CA$"}
                  {account.balances.current}
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </Box>
  );
}
export default DashboardView;
