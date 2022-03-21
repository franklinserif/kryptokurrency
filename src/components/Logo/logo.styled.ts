import styled, { DefaultTheme } from 'styled-components';

type StyledLogoPropsType = {
  theme: DefaultTheme;
};

const StyledLogo = styled.span<StyledLogoPropsType>`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize[300]}px;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: ${({ theme }) => theme.fontWeight[300]};
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    cursor: pointer;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  .logo {
    width: 100%;
    max-width: 40px;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover .logo {
    transform: rotate(365deg);
  }
`;

export default StyledLogo;
