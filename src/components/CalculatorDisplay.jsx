import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Stack, Typography } from '@mui/material';

const IntlFormat = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

const formatNum = (num) => {
  if (num === '') return null;
  const [integer, decimal] = num.split('.');

  if (decimal) {
    return `${IntlFormat.format(integer)}.${decimal}`;
  }

  return IntlFormat.format(integer);
};

function CalculatorDisplay({ currentNum, prevNum, operation }) {
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

CalculatorDisplay.propTypes = {
  currentNum: PropTypes.string.isRequired,
  prevNum: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default CalculatorDisplay;
