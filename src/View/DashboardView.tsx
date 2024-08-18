import { useEffect, useState } from "react";
import Link from "../Components/Link";

function DashboardView() {
  const [readyAccess, setReadyAccess] = useState<boolean>(false);
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
    if (readyAccess) {
      console.log("Get Account");
      getAccount();
    }
  }, [readyAccess]);

  return (
    <>
      <Link
        handleReadyAccess={() => {
          setReadyAccess(true);
        }}
      />
      <h1>Dashboard</h1>
    </>
  );
}
export default DashboardView;
