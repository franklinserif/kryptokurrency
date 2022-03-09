import React from 'react';
import ButtonPropsTypes from './button.type';
import { StyledButton } from './button.styled';
/**
 * Button Components
 * @param {Object} props
 * @param {string} props.children
 * @param {string} props.variant
 * @param {handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void} handleClick
 * @returns
 */
const Button = ({ children, variant, handleClick }: ButtonPropsTypes) => {
  return (
    <StyledButton variant={variant} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
