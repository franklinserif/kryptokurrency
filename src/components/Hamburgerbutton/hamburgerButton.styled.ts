import styled, { DefaultTheme } from 'styled-components';
import Theme from '../../themes/Theme';

type StyledHamburgerButtonPropsType = {
  theme: DefaultTheme;
};

export const StyledHamburgerButton = styled.button<StyledHamburgerButtonPropsType>`
  background-color: transparent;
  & button {
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 5px;
  }

  .change .bar1 {
    -webkit-transform: rotate(-49deg) translate(-9px, 6px);
    transform: rotate(-49deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;
