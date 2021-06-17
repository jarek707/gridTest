import React from 'react';
import PropTypes from 'prop-types';
import {Box} from './styledComponents';

const SumBox = ({sum}) => {
  let formattedSum = sum.toFixed(sum < 10 ? 2 : 1);

  if (sum >= 1000) {
    const significantPositionsLength = String(Math.abs(parseInt(sum))).length;
    const mantissaSize = (3 - significantPositionsLength%3)%3;

    if (sum >= 1000000) {
      formattedSum = (sum/1000000).toFixed(mantissaSize) + 'M';
    } else {
      formattedSum = (sum/1000).toFixed(mantissaSize) + 'K';
    }
  }

  return(
    <Box>
      <div style={{flex: 1}}>SUM: {formattedSum}</div>
    </Box>
  )
}

SumBox.propTypes = {
  sum: PropTypes.number.isRequired
}

export default SumBox;
