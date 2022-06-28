import React from 'react';

import CalculatorKey from './CalculatorKey';
import { useCalculator } from '../container/CalculatorProvider';
import evaluate from '../helpers/evaluate';

function CalculatorKeypad() {
  const {
    shouldOverwrite,
    currentNum,
    prevNum,
    operation,
    setShouldOverwrite,
    setCurrentNum,
    setPrevNum,
    setOperation,
  } = useCalculator();

  const onClickAC = () => {
    setCurrentNum('');
    setPrevNum('');
    setOperation('');
  };

  const onClickDel = () => {
    if (shouldOverwrite) {
      setCurrentNum('');
      setShouldOverwrite(false);
      return;
    }

    setCurrentNum(currentNum.slice(0, -1));
  };

  const onClickEvaluate = () => {
    if ([operation, currentNum, prevNum].includes('')) return;

    setPrevNum('');
    setCurrentNum(evaluate(prevNum, currentNum, operation));
    setOperation('');
    setShouldOverwrite(true);
  };

  const onClickNum = (num) => {
    if (shouldOverwrite) {
      setCurrentNum(num);
      setShouldOverwrite(false);
      return;
    }
    if (num === '0' && currentNum === '0') return;
    if (num === '.' && currentNum.includes('.')) return;
    setCurrentNum(`${currentNum}${num}`);
  };

  const onClickOperation = (action) => {
    if (currentNum === '' && prevNum === '') return;

    if (currentNum === '') {
      setOperation(action);
      return;
    }

    if (prevNum === '') {
      setPrevNum(currentNum);
      setCurrentNum('');
      setOperation(action);
      return;
    }

    setPrevNum(evaluate(prevNum, currentNum, operation));
    setCurrentNum('');
    setOperation(action);
  };

  return (
    <>
      {/* first row */}
      <CalculatorKey gridCount={6} onClick={onClickAC}>
        AC
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={onClickDel}>
        DEL
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickOperation('/')}>
        /
      </CalculatorKey>

      {/* second row */}
      <CalculatorKey gridCount={3} onClick={() => onClickNum('1')}>
        1
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('2')}>
        2
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('3')}>
        3
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickOperation('*')}>
        *
      </CalculatorKey>

      {/* third row */}
      <CalculatorKey gridCount={3} onClick={() => onClickNum('4')}>
        4
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('5')}>
        5
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('6')}>
        6
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickOperation('+')}>
        +
      </CalculatorKey>

      {/* fourth row */}
      <CalculatorKey gridCount={3} onClick={() => onClickNum('7')}>
        7
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('8')}>
        8
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('9')}>
        9
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickOperation('-')}>
        -
      </CalculatorKey>

      <CalculatorKey gridCount={3} onClick={() => onClickNum('.')}>
        .
      </CalculatorKey>
      <CalculatorKey gridCount={3} onClick={() => onClickNum('0')}>
        0
      </CalculatorKey>
      <CalculatorKey gridCount={6} onClick={onClickEvaluate}>
        =
      </CalculatorKey>
    </>
  );
}

export default CalculatorKeypad;
