import React, { ReactNode } from 'react';

type ButtonPropsTypes = {
  children: string | ReactNode;
  variant:
    | 'primary-button'
    | 'secondary-button'
    | 'tertiary-button'
    | 'danger-button'
    | 'ghost-button'
    | 'icon-button';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonPropsTypes;
