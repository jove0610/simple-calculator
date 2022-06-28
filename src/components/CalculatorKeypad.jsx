import React from 'react';

import CalculatorKey from './CalculatorKey';
import { useCalculator } from '../container/CalculatorProvider';

function CalculatorKeypad() {
  const {
    onClickAC,
    onClickDel,
    onClickEvaluate,
    onClickNum,
    onClickOperation,
  } = useCalculator();

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
