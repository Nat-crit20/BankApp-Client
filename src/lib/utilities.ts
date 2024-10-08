export const getTransactions = async () => {
  const response = await fetch("http://localhost:3000/api/transactions", {
    method: "GET",
  });
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data.latest_transactions.reverse();
};
