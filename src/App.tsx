import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "./Components/Link";
import "./App.css";
import DashboardView from "./View/DashboardView";

function App() {
  const [linkToken, setLinkToken] = useState<string>("");
  const [readyAccess, setReadyAccess] = useState<boolean>(false);
  const generateLinkToken = useCallback(async () => {
    const response = await fetch(
      "http://localhost:3000/api/create_link_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      }
    );

    if (!response.ok) {
      return;
    }
    const data = await response.json();
    if (data) {
      setLinkToken(data.link_token);
    }
  }, []);

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
    const init = () => {
      generateLinkToken();
    };
    init();
  }, [generateLinkToken]);
  useEffect(() => {
    if (readyAccess) {
      console.log("Get Account");
      getAccount();
    }
  }, [readyAccess]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<DashboardView />} />
        </Routes>
      </BrowserRouter>
      <Link
        linkToken={linkToken}
        handleReadyAccess={() => {
          setReadyAccess(true);
        }}
      />
    </>
  );
}

export default App;
