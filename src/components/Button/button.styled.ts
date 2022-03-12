import styled, { DefaultTheme, css } from 'styled-components';

type StyledButtonProps = {
  theme: DefaultTheme;
  variant: 'primary-button' | 'secondary-button' | 'link-button';
};

const primaryButton = css<StyledButtonProps>`
  background-color: ${(props) => props.theme.colors.blue[300]};
  font-size: ${(props) => props.theme.fontSize[200]}px;
  color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1.5rem;
`;

const secondaryButton = css<StyledButtonProps>``;

const linkButton = css<StyledButtonProps>``;

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) =>
    variant === 'primary-button'
      ? primaryButton
      : variant === 'secondary-button'
      ? secondaryButton
      : variant === 'link-button'
      ? linkButton
      : ''};
`;
