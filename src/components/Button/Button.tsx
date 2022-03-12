import React from 'react';
import ButtonPropsTypes from './button.type';
import { StyledButton } from './button.styled';
/**
 * Button Components
 * @param {Object} props
 * @param {string} props.children
 * @param {string} props.variantprimary primary-button | secondary-button | link-button
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.handleClick
 * @returns {JSX.Element}
 */
const Button: React.FC<ButtonPropsTypes> = (props: ButtonPropsTypes): JSX.Element => {
  const { children, variant, handleClick } = props;
  return (
    <StyledButton variant={variant} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
