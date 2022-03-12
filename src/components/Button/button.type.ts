import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

type ButtonPropsTypes = {
  children: string;
  variant: 'primary-button' | 'secondary-button' | 'link-button';
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonPropsTypes;
