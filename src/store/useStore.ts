import create from "zustand";
import { Results } from "../types/results";

export const useStore = create((set) => ({
  results: {
    basis: 0,
    expenses: 0,
    allowance: 0,
  },
  setCalculateInputs: (inputs: Results) => set({ calculateInputs: inputs }),
}));
