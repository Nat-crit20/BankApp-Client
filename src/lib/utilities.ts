export const getTransactions = async () => {
  const response = await fetch("http://localhost:3000/api/transactions", {
    method: "GET",
  });
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  console.log(data);
  return data.latest_transactions;
};
