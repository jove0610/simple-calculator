import React from 'react';

import { Container, Grid } from '@mui/material';

import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorKeypad from './components/CalculatorKeypad';

import CalculatorProvider from './container/CalculatorProvider';

function App() {
  return (
    <CalculatorProvider>
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
          <CalculatorDisplay />
          <CalculatorKeypad />
        </Grid>
      </Container>
    </CalculatorProvider>
  );
}

export default App;
