import React from 'react';
import StyledLogo from './logo.styled';
import { Blockchain32 } from '@carbon/icons-react';

/**
 *  Logo blockchain
 * @returns {JSX.Element}
 */
const Logo: React.FC = (): JSX.Element => {
  return (
    <StyledLogo>
      <Blockchain32 aria-label="Logo" className="Logo" />
    </StyledLogo>
  );
};

export default Logo;
