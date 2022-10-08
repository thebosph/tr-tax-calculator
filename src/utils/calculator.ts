import { HOUSE_EXCEPTION } from "../constants";
import { InputTypes } from "../types/Inputs";
import { taxCalcForBrackets } from "./taxbrackets";

export const calculator = ({ revenue, expenses, allowance }: InputTypes) => {
  const basis = revenue - HOUSE_EXCEPTION - expenses - allowance;
  const tax = taxCalcForBrackets(basis);
  const ratio = tax / (revenue - expenses);

  return {
    basis,
    tax,
    ratio,
  };
};
