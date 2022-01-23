const fetchCoin = require("../async.js");

describe("Async", () => {
  it("async", () => {
    fetchCoin().then((item) => {
      expect(item).toEqual({ item: "bitcoin", price: 60000000 });
    });
  });

  it("async-return", () => {
    return fetchCoin().then((item) => {
      expect(item).toEqual({ item: "bitcoin", price: 60000000 });
    });
  });

  it("async-await", () => {
    const coin = await fetchCoin();
    expect(coin).toEqual({ item: "bitcoin", price: 60000000 });
  });

  it("async-resolves", () => {
    return expect(fetchCoin()).resolves.toEqual({
      item: "bitcoin",
      price: 60000000,
    });
  });

  it("async-reject", () => {
    return expect(fetchCoin("error")).rejects.toBe("network error");
  });
});
