import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import evaluate from '../helpers/evaluate';

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [shouldOverwrite, setShouldOverwrite] = useState(false);
  const [currentNum, setCurrentNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [operation, setOperation] = useState('');

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

  const contextValue = useMemo(
    () => ({
      currentNum,
      prevNum,
      operation,
      onClickAC,
      onClickDel,
      onClickEvaluate,
      onClickNum,
      onClickOperation,
    }),
    [
      currentNum,
      prevNum,
      operation,
      onClickAC,
      onClickDel,
      onClickEvaluate,
      onClickNum,
      onClickOperation,
    ]
  );

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

CalculatorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalculatorProvider;

export const useCalculator = () => useContext(CalculatorContext);
