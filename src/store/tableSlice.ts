import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { PayloadAction } from "@reduxjs/toolkit";

const DEMO_DATA = [
  {
    id: "c1",
    country: "Poland",
    golden: 1,
    silver: 5,
    bronze: 8,
    total: 14,
  },
  {
    id: "c2",
    country: "Germany",
    golden: 4,
    silver: 2,
    bronze: 1,
    total: 7,
  },
  {
    id: "c3",
    country: "England",
    golden: 3,
    silver: 4,
    bronze: 4,
    total: 11,
  },
  {
    id: "c4",
    country: "Spain",
    golden: 2,
    silver: 8,
    bronze: 3,
    total: 13,
  },
  {
    id: "c5",
    country: "Japan",
    golden: 3,
    silver: 4,
    bronze: 8,
    total: 15,
  },
];

export interface Country {
  id: string;
  country: string;
  golden: number;
  silver: number;
  bronze: number;
  total: number;
}

export interface Ordering {
  key: keyof Omit<Country, "id"> | "default";
  type: "asc" | "dsc";
}

export interface TableState {
  countries: Country[];
  ordering: Ordering;
  clickedCountry: Country | undefined;
}

const initialState: TableState = {
  countries: [],
  ordering: {
    key: "default",
    type: "dsc",
  },
  clickedCountry: undefined,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addCountry: (state, action: PayloadAction<Omit<Country, "id">>) => {
      state.countries.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
    removeCountry: (state, action: PayloadAction<{ id: string }>) => {
      state.countries = state.countries.filter(
        (country) => country.id !== action.payload.id
      );
    },
    editCountry: (state, action: PayloadAction<{ country: Country }>) => {
      const payloadCountry = action.payload.country;

      state.countries = state.countries.map((country) => {
        if (country.id === payloadCountry.id) return payloadCountry;
        return country;
      });
    },
    changeOrdering: (state, action: PayloadAction<{ ordering: Ordering }>) => {
      state.ordering = action.payload.ordering;
    },
    loadDemoData: (state) => {
      state.countries = DEMO_DATA;
    },
    clearData: (state) => {
      state.countries = [];
    },
    openModal: (state, action: PayloadAction<{ country: Country }>) => {
      state.clickedCountry = action.payload.country;
    },
    closeModal: (state) => {
      state.clickedCountry = undefined;
    },
  },
});

export const {
  addCountry,
  removeCountry,
  editCountry,
  changeOrdering,
  loadDemoData,
  clearData,
  openModal,
  closeModal,
} = tableSlice.actions;

export default tableSlice.reducer;
