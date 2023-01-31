import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Country {
  country: string;
  golden: number;
  silver: number;
  bronze: number;
}

export interface TableState {
  countries: Country[];
}

const initialState: TableState = {
  countries: [
    {
      country: "Poland",
      golden: 1,
      silver: 5,
      bronze: 8,
    },
    {
      country: "Germany",
      golden: 4,
      silver: 2,
      bronze: 1,
    },
    {
      country: "england",
      golden: 3,
      silver: 4,
      bronze: 4,
    },
    {
      country: "Spain",
      golden: 2,
      silver: 8,
      bronze: 3,
    },
    {
      country: "Japan",
      golden: 3,
      silver: 4,
      bronze: 8,
    },
  ],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<Country>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

export const { addCountry } = tableSlice.actions;

export default tableSlice.reducer;
