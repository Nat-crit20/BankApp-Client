import { usePlaidLink } from "react-plaid-link";

interface LinkProps {
  linkToken: string;
}
function Link({ linkToken }: LinkProps): JSX.Element {
  const { open, ready } = usePlaidLink({
    token: linkToken,
  });
  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
}

export default Link;
