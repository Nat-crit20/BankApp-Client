import { useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";

interface LinkProps {
  linkToken: string;
  handleReadyAccess: () => void;
}
function Link({ linkToken, handleReadyAccess }: LinkProps): JSX.Element {
  const onSuccess = useCallback((public_token: string) => {
    const exchangePublicTokenForAccessToken = async () => {
      const response = await fetch(
        "http://localhost:3000/api/set_access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: `public_token=${public_token}`,
        }
      );
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      if (data) {
        console.log("Success got the access token saved in the backend!");
        handleReadyAccess();
      }
    };
    exchangePublicTokenForAccessToken();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess,
  });

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
}

export default Link;
