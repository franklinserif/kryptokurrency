import styled, { DefaultTheme } from 'styled-components';

type StyledButtonProps = {
  theme: DefaultTheme;
  variant: string;
};

const primaryButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => {
    if (props.theme.colors.blue[100]) {
      return props.theme.colors.blue[100];
    }
  }};
  font-size: ${(props) => {
    if (props.theme.fontSize[200]) {
      return props.theme.colors.blue[100];
    }
  }};
  color: ${(props) => {
    if (props.theme.colors.white) {
      return props.theme.colors.white;
    }
  }};
  padding: 0.5rem 1.5rem;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => {
    if (props.variant === 'primary-button') {
      return primaryButton;
    }
  }};
`;
