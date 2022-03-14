import styled, { DefaultTheme } from 'styled-components';

type StyledLogoPropsType = {
  theme: DefaultTheme;
};

const StyledLogo = styled.span<StyledLogoPropsType>`
  .logo {
    width: 100%;
    max-width: 150px;
  }
`;

export default StyledLogo;
