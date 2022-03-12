import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

type ButtonPropsTypes = {
  children: string;
  variant: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonPropsTypes;
