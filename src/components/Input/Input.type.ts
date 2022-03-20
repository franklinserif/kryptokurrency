import { ReactNode } from 'react';

export type InputPropsType = {
  type: string;
  variant: 'sm' | 'lg' | 'xl';
  value: string;
  placeholder: string;
  light: boolean;
  children?: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
