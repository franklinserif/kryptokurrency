import styled, { DefaultTheme } from 'styled-components';

type StyledMarketInfoPropsType = {
  theme: DefaultTheme;
  dark: boolean;
};

export const StyledMarkInfo = styled.section<StyledMarketInfoPropsType>`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .data-info {
    font-size: ${({ theme }) => theme.fontSize[500]}px;
    font-weight: ${({ theme }) => theme.fontWeight[500]};
  }
  & > * {
    color: ${({ theme, dark }) => (dark ? theme.colors.black : theme.colors.white)};
  }
`;
