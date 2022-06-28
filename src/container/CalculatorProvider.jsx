import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [shouldOverwrite, setShouldOverwrite] = useState(false);
  const [currentNum, setCurrentNum] = useState('');
  const [prevNum, setPrevNum] = useState('');
  const [operation, setOperation] = useState('');

  const contextValue = useMemo(
    () => ({
      shouldOverwrite,
      currentNum,
      prevNum,
      operation,
      setShouldOverwrite,
      setCurrentNum,
      setPrevNum,
      setOperation,
    }),
    [
      shouldOverwrite,
      currentNum,
      prevNum,
      operation,
      setShouldOverwrite,
      setCurrentNum,
      setPrevNum,
      setOperation,
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
