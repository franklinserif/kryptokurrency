import React, { ReactNode } from 'react';

export type DarkModeButonPropsType = {
  handleDarkModeChange: (
    e: React.MouseEvent<HTMLButtonElement>,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
};
