import { useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";

interface LinkProps {
  linkToken: string;
}
function Link({ linkToken }: LinkProps): JSX.Element {
  const onSuccess = useCallback((public_token: string) => {
    const exchangePublicTokenForAccessToken = async () => {
      const response = await fetch("/api/set_access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: `public_token=${public_token}`,
      });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      console.log(data);
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
