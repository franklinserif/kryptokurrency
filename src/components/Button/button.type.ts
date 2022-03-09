import React, { ReactNode } from 'react';

type ButtonPropsTypes = {
  children: string;
  variant: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonPropsTypes;
