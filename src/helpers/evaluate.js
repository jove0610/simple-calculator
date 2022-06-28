const evaluate = (previous, currentNum, action) => {
  const number1 = Number(previous);
  const nummber2 = Number(currentNum);

  if (Number.isNaN(number1) || Number.isNaN(nummber2)) {
    return '';
  }

  let answer = '';
  switch (action) {
    case '+':
      answer = number1 + nummber2;
      break;
    case '-':
      answer = number1 - nummber2;
      break;
    case '*':
      answer = number1 * nummber2;
      break;
    case '/':
      answer = number1 / nummber2;
      break;
    default:
      answer = '';
  }

  return answer.toString();
};

export default evaluate;
