import create from "zustand";
import { ResultTypes } from "../types/results";

interface State {
  results: ResultTypes;
  setResults: (results: ResultTypes) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
}

const useStore = create<State>((set) => ({
  results: {
    basis: 0,
    tax: 0,
    ratio: 0,
  },
  setResults: (results) => set({ results }),
  modal: false,
  setModal: (modal) => set({ modal }),
}));

export default useStore;
