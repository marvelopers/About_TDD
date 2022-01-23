const fetchCoin = (error: string | Error) => {
  if (error === "error") {
    return Promise.reject("network error");
  }

  return Promise.resolve({ item: "bitcoin", price: 60000000 });
};

module.exports = fetchCoin;
