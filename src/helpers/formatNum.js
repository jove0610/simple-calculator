const formatNum = (num) => {
  const IntlFormat = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  });

  if (num === '') return null;
  const [integer, decimal] = num.split('.');

  if (decimal) {
    return `${IntlFormat.format(integer)}.${decimal}`;
  }

  return IntlFormat.format(integer);
};

export default formatNum;
