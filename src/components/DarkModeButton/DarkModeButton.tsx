import React, { useState } from 'react';
import { DarkModeButonPropsType } from './DarkModeButton.type';
import StyledDarkModeButton from './darkModeButton.styled';
import { Light32, Asleep32 } from '@carbon/icons-react';
import { useTransition, animated } from 'react-spring';
/**
 *  Dark Mode button, change the state of the dark mode
 *  when user click the button with icon animated by react-spring
 *  useTransition
 * @returns {JSX.Element}
 */
const DarkModeButton: React.FC<DarkModeButonPropsType> = (
  props: DarkModeButonPropsType,
): JSX.Element => {
  const { handleDarkModeChange } = props;
  const [darkMode, setDarkMode] = useState(false);
  const transitions = useTransition(darkMode, {
    from: { position: 'absolute', opacity: 0, y: -5 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 5 },
    reverse: darkMode,
    delay: 200,
  });

  return (
    <StyledDarkModeButton onClick={(e) => handleDarkModeChange(e, setDarkMode)}>
      {transitions(({ opacity, y }, item) =>
        item ? (
          <animated.div
            style={{
              position: 'absolute',
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              y: y.to({ range: [1.0, 0.0], output: [5, 0] }),
            }}
          >
            <Asleep32 aria-label="search" className="input-icon" />
          </animated.div>
        ) : (
          <animated.div
            style={{
              position: 'absolute',
              opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
              y: y.to({ range: [1.0, 0.0], output: [5, 0] }),
            }}
          >
            <Light32 aria-label="search" className="input-icon" />
          </animated.div>
        ),
      )}
    </StyledDarkModeButton>
  );
};

export default DarkModeButton;
