import styled, { DefaultTheme, css } from 'styled-components';

type StyledButtonProps = {
  theme: DefaultTheme;
  variant:
    | 'primary-button'
    | 'secondary-button'
    | 'tertiary-button'
    | 'danger-button'
    | 'ghost-button'
    | 'icon-button';
};

const basicStyles = css<StyledButtonProps>`
  font-size: ${({ theme }) => theme.fontSize[200]}px;
  font-weight: ${({ theme }) => theme.fontWeight[300]};
  color: ${(props) => props.theme.colors.white};
  padding: 0.7rem 1.7rem;
  border: none;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

const primaryButton = css<StyledButtonProps>`
  ${basicStyles};
  background-color: ${({ theme }) => theme.colors.blue[400]};
`;

const secondaryButton = css<StyledButtonProps>`
  ${basicStyles}
  background-color: ${({ theme }) => theme.colors.gray[800]};
`;

const tertiaryButton = css<StyledButtonProps>`
  ${basicStyles}
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.blue[700]};
  color: ${({ theme }) => theme.colors.blue[700]};

  &:hover {
    color: ${({ theme }) => theme.colors.blue[500]};
    border: 1px solid ${({ theme }) => theme.colors.blue[500]};
  }

  &:active {
    color: ${({ theme }) => theme.colors.blue[500]};
    border: 1px solid ${({ theme }) => theme.colors.blue[500]};
  }
`;

const dangerButton = css<StyledButtonProps>`
  ${basicStyles}
  background-color: ${({ theme }) => theme.colors.danger};
`;

const ghostButton = css<StyledButtonProps>`
  ${basicStyles}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue[700]};

  &:hover {
    box-shadow: none;
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  &:active {
    transform: scale(0.9);
    color: ${({ theme }) => theme.colors.blue[500]};
    box-shadow: none;
  }
`;

const iconButton = css<StyledButtonProps>`
  & {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & .input-icon {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  & .input-icon:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  & .input-icon:active {
    transform: scale(1.2);
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) =>
    variant === 'primary-button'
      ? primaryButton
      : variant === 'secondary-button'
      ? secondaryButton
      : variant === 'tertiary-button'
      ? tertiaryButton
      : variant === 'danger-button'
      ? dangerButton
      : variant === 'ghost-button'
      ? ghostButton
      : variant === 'icon-button'
      ? iconButton
      : primaryButton};
`;
