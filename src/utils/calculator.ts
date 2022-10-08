import { HOUSE_EXCEPTION } from "../constants";
import { InputTypes } from "../types/Inputs";
import { taxCalcForBrackets } from "./taxbrackets";

export const calculator = ({
  revenue,
  expenses,
  allowance,
  expensesKind,
}: InputTypes) => {
  let basis;
  let tax;
  let ratio;

  if (expensesKind === "exactCharges") {
    const revenueWithoutException = revenue - HOUSE_EXCEPTION;
    const usableExpenses = (expenses * revenueWithoutException) / revenue;

    basis = revenueWithoutException - usableExpenses - allowance;
    tax = taxCalcForBrackets(basis);
    ratio = tax / revenueWithoutException;
  } else {
    basis = revenue - HOUSE_EXCEPTION - expenses - allowance;

    tax = taxCalcForBrackets(basis);
    ratio = tax / (revenue - expenses);
  }

  return {
    basis,
    tax,
    ratio,
  };
};
