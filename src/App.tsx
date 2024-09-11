import { useCallback, useEffect, useContext } from "react";
import Context from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardView from "./View/DashboardView";
import LoginView from "./View/LoginView";
import SignUpView from "./View/SignUpView";
import Layout from "./Components/Layout";
import TransactionsView from "./View/Transactions";
import SettingsView from "./View/SettingsView";

function App() {
  const { dispatch } = useContext(Context);

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
      dispatch({
        type: "SET_STATE",
        state: { linkTokenID: data.link_token },
      });
    }
  }, [dispatch]);

  useEffect(() => {
    const init = () => {
      generateLinkToken();
    };
    init();
  }, [generateLinkToken]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<SignUpView />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<DashboardView />} />
            <Route path="/transactions" element={<TransactionsView />} />
            
            <Route path="/settings" element={<SettingsView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
