const initialState = {
  newCar: [
    {},
    {
      incomeScore: 1,
      electric: 5250,
      hybrid: 4250,
    },
    {
      incomeScore: 2,
      electric: 5250,
      hybrid: 4250,
    },
    {
      incomeScore: 3,
      electric: 5250,
      hybrid: 4250,
    },
    {
      incomeScore: 4,
      electric: 2750,
      hybrid: 1750,
    },
  ],
  usedCar: [
    {},
    {
      incomeScore: 1,
      electric: 1500,
      hybrid: 1500,
    },
    {
      incomeScore: 2,
      electric: 1500,
      hybrid: 1500,
    },
    {
      incomeScore: 3,
      electric: 1500,
      hybrid: 1500,
    },
    {
      incomeScore: 4,
      electric: 1500,
      hybrid: 1500,
    },
  ],
  federal: {
    electric: 7500,
    hybrid: 5000,
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
