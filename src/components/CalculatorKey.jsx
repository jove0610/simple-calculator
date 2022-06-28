import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid } from '@mui/material';

function CalculatorKey({ onClick, children, gridCount, variant }) {
  return (
    <Grid item xs={gridCount}>
      <Button variant={variant} onClick={onClick} fullWidth>
        {children}
      </Button>
    </Grid>
  );
}

CalculatorKey.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  gridCount: PropTypes.number,
  variant: PropTypes.string,
};

CalculatorKey.defaultProps = {
  gridCount: 12,
  variant: 'outlined',
};

export default CalculatorKey;
