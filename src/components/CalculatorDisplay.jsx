import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

import { useCalculator } from '../container/CalculatorProvider';
import formatNum from '../helpers/formatNum';

function CalculatorDisplay() {
  const { currentNum, prevNum, operation } = useCalculator();

  return (
    <Grid item xs={12}>
      <Stack
        px="0.8em"
        py="0.5em"
        justifyContent="space-between"
        alignItems="space-between"
        height="100%"
        spacing="0.5em"
        sx={{ background: '#1c191c' }}
      >
        <Typography
          textAlign="right"
          sx={{ color: '#fff', wordWrap: 'break-word' }}
        >
          {operation && `${formatNum(prevNum)} ${operation}`}
          {!operation && <>&nbsp;</>}
        </Typography>

        <Typography
          variant="h5"
          textAlign="right"
          sx={{ color: '#fff', wordWrap: 'break-word' }}
        >
          {formatNum(currentNum) || <>&nbsp;</>}
        </Typography>
      </Stack>
    </Grid>
  );
}

export default CalculatorDisplay;
