export const getCoins = async () => {
  const resp = await fetch(
    "https://api.coincap.io/v2/assets?api-key=69ae8b08-db21-448a-b1c5-c344a5501628&limit=10"
  );
  const { data } = await resp.json();
  return data;
};
