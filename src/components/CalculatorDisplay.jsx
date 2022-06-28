import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, Typography } from '@mui/material';

function CalculatorDisplay({ children }) {
  return (
    <Grid item xs={12}>
      <Box p="2em 0.8em 0.5em 0.8em" sx={{ background: '#1c191c' }}>
        <Typography variant="h5" textAlign="right" sx={{ color: '#fff' }}>
          {children}
        </Typography>
      </Box>
    </Grid>
  );
}

CalculatorDisplay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalculatorDisplay;
