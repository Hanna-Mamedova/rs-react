export enum InputLength {
  min = 5,
  max = 30,
}

export const isAfter = (date: string) => {
  if (!date) {
    return false;
  }
  return new Date(date) < new Date();
};

export const isPositive = (price: string) => {
  if (!price) {
    return false;
  }
  return +price > 0;
};
