import styled, { DefaultTheme } from 'styled-components';

type StyledHeadingPropsType = {
  theme: DefaultTheme;
  dark: boolean;
};

export const StyledHeading = styled.span<StyledHeadingPropsType>`
  & > * {
    color: ${({ theme, dark }) => (dark ? theme.colors.black : theme.colors.white)};
    text-transform: capitalize;
  }
`;
