import { useEffect, useContext } from "react";
import Link from "../Components/Link";
import Context from "../Context";

function DashboardView() {
  const { accountAccess } = useContext(Context);

  const getAccount = async () => {
    console.log("before get accounts");
    const response = await fetch("http://localhost:3000/api/accounts", {
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
      console.log("Get Account");
      getAccount();
    }
  }, [accountAccess]);

  return (
    <>
      <Link />
      <h1>Dashboard</h1>
    </>
  );
}
export default DashboardView;
