import { Inputs } from "../types/Inputs";
import { taxCalcForBrackets } from "./taxbrackets";

export const calculator = ({ revenue, expenses, allowance }: Inputs) => {
  const basis = revenue - expenses - allowance;
  const tax = taxCalcForBrackets(basis);
  const ratio = tax / (revenue - expenses);

  return {
    basis,
    tax,
    ratio,
  };
};
