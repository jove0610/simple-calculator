import React, { useState } from 'react';

import { Container, Grid } from '@mui/material';

import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorKey from './components/CalculatorKey';

function App() {
  const [shouldOverwrite, setShouldOverwrite] = useState(false);
  const [currentNum, setCurrentNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [operation, setOperation] = useState('');

  const onClickAC = () => {
    setCurrentNum('');
    setPrevNum('');
    setOperation('');
  };

  const evaluate = () => {
    const prev = Number(prevNum);
    const current = Number(currentNum);

    if (Number.isNaN(prev) || Number.isNaN(current)) {
      return '';
    }

    let answer = '';
    switch (operation) {
      case '+':
        answer = prev + current;
        break;
      case '-':
        answer = prev - current;
        break;
      case '*':
        answer = prev * current;
        break;
      case '/':
        answer = prev / current;
        break;
      default:
        answer = '';
    }

    return answer.toString();
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
    setCurrentNum(evaluate());
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

    setPrevNum(evaluate());
    setCurrentNum('');
    setOperation(action);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        boxShadow: '0 0 1.5em #888888',
        borderRadius: '1em',
        width: '25em',
        maxWidth: '90vw',
        mt: '5em',
        p: '2em',
      }}
    >
      <Grid container spacing="0.5em">
        <CalculatorDisplay
          currentNum={currentNum}
          prevNum={prevNum}
          operation={operation}
        />

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
      </Grid>
    </Container>
  );
}

export default App;
