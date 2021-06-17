import React, {useState} from 'react';
import NumberBox from './NumberBox';
import SumBox from './SumBox';

import {GridContainer} from './styledComponents';

const initialGridValues = [0, 0, 0, 0];
const gridIndexes = initialGridValues.map( (_, index) => index);

const SummingGrid = () => {
  const [gridValues, setGridValues] = useState(initialGridValues);

  const sumOfValues = gridValues.reduce( (agg, value) => agg + value, 0);

  return(
    <GridContainer>
      {gridIndexes.map( index =>
        <NumberBox
          key={index}
          initialValue={gridValues[index]}
          heading={`Input ${index}`}

          onChange={ newValue => {
            setGridValues( values => values.map( (val, idx) =>
              index === idx ? Number(newValue) : val
            ));
          }}
        />
      )}

      <SumBox sum={sumOfValues} />
    </GridContainer>
  )
}

export default SummingGrid;
