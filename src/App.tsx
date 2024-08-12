import { useCallback, useEffect, useState } from "react";
import Link from "./Components/Link";
import "./App.css";

function App() {
  const [linkToken, setLinkToken] = useState<string>("");
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
  useEffect(() => {
    const init = () => {
      generateLinkToken();
    };
    init();
  }, [generateLinkToken]);

  return (
    <>
      <Link linkToken={linkToken} />
    </>
  );
}

export default App;
