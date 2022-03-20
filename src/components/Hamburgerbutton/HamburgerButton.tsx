import React, { useState } from 'react';
import { StyledHamburgerButton } from './hamburgerButton.styled';
import HamburgerButtonPropsType from './hamburgerButton.type';

const HamburgerButton: React.FC<HamburgerButtonPropsType> = ({
  handleClick,
}: HamburgerButtonPropsType): JSX.Element => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(true);
  const handleClickHamburgerButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleClick(event);
    setIsHamburgerActive((prevIsHamburgerActive) => !prevIsHamburgerActive);
  };

  return (
    <StyledHamburgerButton onClick={handleClickHamburgerButton}>
      <button className={`cointainer ${isHamburgerActive ? '' : 'change'}`}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
