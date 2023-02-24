export const getPathName = (path: string, startPath: string) => {
  return path.split(startPath)[1];
};

export const formatCurrency = (value: number) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
