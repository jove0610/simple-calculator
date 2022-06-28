import React from 'react';

import { Container, Grid } from '@mui/material';

import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorKey from './components/CalculatorKey';

function App() {
  const onClick = () => {
    console.log('click');
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
        <CalculatorDisplay>Hello</CalculatorDisplay>

        {/* first row */}
        <CalculatorKey gridCount={6} onClick={onClick}>
          AC
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          DEL
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          /
        </CalculatorKey>

        {/* second row */}
        <CalculatorKey gridCount={3} onClick={onClick}>
          1
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          2
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          3
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          *
        </CalculatorKey>

        {/* third row */}
        <CalculatorKey gridCount={3} onClick={onClick}>
          4
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          5
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          6
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          +
        </CalculatorKey>

        {/* fourth row */}
        <CalculatorKey gridCount={3} onClick={onClick}>
          7
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          8
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          9
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          -
        </CalculatorKey>

        {/* fifth row */}
        <CalculatorKey gridCount={3} onClick={onClick}>
          .
        </CalculatorKey>
        <CalculatorKey gridCount={3} onClick={onClick}>
          0
        </CalculatorKey>
        <CalculatorKey gridCount={6} onClick={onClick}>
          =
        </CalculatorKey>
      </Grid>
    </Container>
  );
}

export default App;
