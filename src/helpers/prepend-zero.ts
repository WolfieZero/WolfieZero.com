export const prependZero = (value: number): string => {
  if (value <= 9) {
    return 0 + value.toString();
  }
  return value.toString();
};
