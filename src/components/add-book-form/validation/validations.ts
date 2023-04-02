export enum InputLength {
  min = 5,
  max = 30,
}

export const isAfter = (date: Date) => {
  if (!date) {
    return false;
  }
  return new Date(date) < new Date();
};

export const isPositive = (price: number) => {
  if (!price) {
    return false;
  }
  return price > 0;
};
