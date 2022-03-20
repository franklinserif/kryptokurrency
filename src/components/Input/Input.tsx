import React from 'react';
import StyledInputWrapper from './Input.styled';
import { InputPropsType } from './Input.type';

/**
 * Input Component
 * @param {InputPropsType} props
 * @param {string} props.type
 * @param {string} props.placeholder
 * @param {'sm' | 'lg' | 'xl'} props.variant
 * @param {string} props.value State value
 * @param {boolean} props.light
 * @param {ReactNode}  props.children
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleChange
 * @returns
 */
const Input: React.FC<InputPropsType> = (props: InputPropsType): JSX.Element => {
  const { handleChange, type, placeholder, children, value, ...rest } = props;
  return (
    <StyledInputWrapper {...rest} icon={children ? true : false}>
      {children}
      <input
        onChange={(e) => handleChange(e)}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </StyledInputWrapper>
  );
};

export default Input;
