import { useContext, useEffect } from "react";
import Context from "../Context";

const TransactionsView = () => {
  const { accountAccess } = useContext(Context);

  const getTransactions = async () => {
    const response = await fetch("http://localhost:3000/api/transactions", {
      method: "GET",
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    if (accountAccess) {
      getTransactions();
    }
  }, [accountAccess]);
  return (
    <>
      <h1>Transactions</h1>
    </>
  );
};
export default TransactionsView;
