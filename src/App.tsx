import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "./Components/Link";
import Navbar from "./Components/Navbar";
import "./App.css";
import DashboardView from "./View/DashboardView";
import LoginView from "./View/LoginView";
import SignUpView from "./View/SignUpView";
import Layout from "./Components/Layout";

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
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<SignUpView />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<DashboardView />} />
            <Route path="/transactions" element={<DashboardView />} />
            <Route path="/accounts" element={<DashboardView />} />
            <Route path="/settings" element={<DashboardView />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Link
        linkToken={linkToken}
        handleReadyAccess={() => {
          setReadyAccess(true);
        }}
      /> */}
    </>
  );
}

export default App;
