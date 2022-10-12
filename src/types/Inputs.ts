export interface InputTypes {
  revenue: number;
  expenses: number;
  expensesKind: ExpensesKind;
  allowance: number;
  loanKind: LoanKind;
  deductions?: number;
}

export enum ExpensesKind {
  sumExpenses = "sumExpenses",
  exactCharges = "exactCharges",
}

export enum LoanKind {
  homeLoan = "homeLoan",
  businessLoan = "businessLoan",
  homeAndBusinessLoan = "homeAndBusinessLoan",
}
