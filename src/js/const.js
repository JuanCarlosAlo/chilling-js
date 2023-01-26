const PRICING_OPTIONS = {
  monthly: {
    basic: {
      price: 19.99,
      storage: 500,
      users: 2,
      sendUp: 3
    },
    professional: {
      price: 24.99,
      storage: 1,
      users: 5,
      sendUp: 10
    },
    master: {
      price: 39.99,
      storage: 2,
      users: 10,
      sendUp: 20
    }
  },
  yearly: {
    basic: {
      price: 199.99,
      storage: 800,
      users: 2,
      sendUp: 5
    },
    professional: {
      price: 249.99,
      storage: 2,
      users: 5,
      sendUp: 15
    },
    master: {
      price: 399.99,
      storage: 3,
      users: 10,
      sendUp: 25
    }
  }
};

export { PRICING_OPTIONS };
