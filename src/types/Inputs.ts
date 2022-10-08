export interface InputTypes {
  revenue: number;
  expenses: number;
  expensesKind: ExpensesKind;
  allowance: number;
}

export enum ExpensesKind {
  sumExpenses = "sumExpenses",
  exactCharges = "exactCharges",
}
