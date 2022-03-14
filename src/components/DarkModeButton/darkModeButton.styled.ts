import styled, { DefaultTheme } from 'styled-components';

type StyledDarkModeButtonPropsType = {
  theme: DefaultTheme;
};

const StyledDarkModeButton = styled.button<StyledDarkModeButtonPropsType>`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default StyledDarkModeButton;
