// calculate tax based on tax brackets

export const taxCalcForBrackets = (basis: number) => {
  if (basis <= 0) {
    return 0;
  }
  if (basis <= 32000) {
    return basis * 0.15;
  }
  if (basis <= 70000) {
    return 4800 + (basis - 32000) * 0.2;
  }
  if (basis <= 250000) {
    return 12400 + (basis - 70000) * 0.27;
  }
  if (basis <= 880000) {
    return 61000 + (basis - 250000) * 0.35;
  }
  return 281500 + (basis - 880000) * 0.4;
};
