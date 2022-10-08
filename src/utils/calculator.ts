import { Inputs } from "../types/Inputs";
import { taxCalcForBrackets } from "./taxbrackets";

export const calculator = ({ revenue, expenses }: Inputs) => {
  const basis = revenue - expenses;
  const tax = taxCalcForBrackets(basis);

  const ratio = tax / revenue;

  return {
    basis,
    tax,
    ratio,
  };
};
