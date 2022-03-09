import styled, { DefaultTheme, css } from 'styled-components';

type StyledButtonProps = {
  theme: DefaultTheme;
  variant: string;
};

const primaryButton = css<StyledButtonProps>`
  background-color: ${(props) => props.theme.colors.blue[300]};
  font-size: ${(props) => props.theme.fontSize[200]}px;
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1.5rem;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => props.variant === 'primary-button' && primaryButton};
`;
