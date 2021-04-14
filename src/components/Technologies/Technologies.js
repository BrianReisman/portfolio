import React from 'react';
import StyledTechnologies from './StyledTechnologies';

// logos
import knexLogo from '../../assets/Technologies/Vector.svg'


const Technologies = (props) => {
  return(
    <StyledTechnologies>
      <img src={knexLogo} alt="Knex Logo"/>
    </StyledTechnologies>
)
};

export default Technologies;
