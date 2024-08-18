import { useCallback, useContext } from "react";
import { usePlaidLink } from "react-plaid-link";
import Context from "../Context";

function Link(): JSX.Element {
  const { linkTokenID, dispatch } = useContext(Context);
  const onSuccess = useCallback(
    (public_token: string) => {
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
          dispatch({
            type: "SET_STATE",
            state: { accountAccess: true },
          });
        }
      };
      exchangePublicTokenForAccessToken();
    },
    [dispatch]
  );

  const { open, ready } = usePlaidLink({
    token: linkTokenID,
    onSuccess,
  });

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
}

export default Link;
