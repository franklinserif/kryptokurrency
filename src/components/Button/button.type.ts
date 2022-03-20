import React, { ReactNode } from 'react';

type ButtonPropsTypes = {
  children: string;
  variant:
    | 'primary-button'
    | 'secondary-button'
    | 'tertiary-button'
    | 'danger-button'
    | 'ghost-button';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonPropsTypes;
