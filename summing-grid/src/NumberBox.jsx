import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Box, errorMsgCss} from './styledComponents';

const BoxWithError = styled(Box)`${errorMsgCss}`;

const NumberBox = ({initialValue, onChange, heading}) => {
  const [notANumber, setNotANumber] = useState(false);

  const handleChange = enteredValue => {
    const isInvalidNumber = isNaN(enteredValue);

    setNotANumber(isInvalidNumber);
    if (!isInvalidNumber)
      onChange(enteredValue);
  }

  return(
    <BoxWithError>
      <h3>{heading}</h3>
      <input
        defaultValue={initialValue}
        onChange={({target: {value}}) => handleChange(value)}
      />
      <div className="errorMessage">
        {notANumber && (
          <span>Please enter a valid number.</span>
        )}
      </div>
    </BoxWithError>
  )
}

NumberBox.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default NumberBox;
