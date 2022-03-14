import React, { useState } from 'react';
import { DarkModeButonPropsType } from './DarkModeButton.type';
import StyledDarkModeButton from './darkModeButton.styled';
import { Light32, Asleep32 } from '@carbon/icons-react';

/**
 *  Dark Mode button, change the state of the dark mode
 *  when user click the button
 * @returns {JSX.Element}
 */
const DarkModeButton: React.FC<DarkModeButonPropsType> = (
  props: DarkModeButonPropsType,
): JSX.Element => {
  const { handleDarkModeChange } = props;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <StyledDarkModeButton onClick={(e) => handleDarkModeChange(e, setDarkMode)}>
      {darkMode ? (
        <Asleep32 aria-label="search" className="input-icon" />
      ) : (
        <Light32 aria-label="search" className="input-icon" />
      )}
    </StyledDarkModeButton>
  );
};

export default DarkModeButton;
