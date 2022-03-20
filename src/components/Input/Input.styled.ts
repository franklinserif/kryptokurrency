import styled, { DefaultTheme, css } from 'styled-components';

type StyledInputProps = {
  theme: DefaultTheme;
  variant: 'sm' | 'lg' | 'xl';
  light: boolean;
  icon: boolean;
};

const StyledIcon = css`
  .input-icon {
    position: absolute;
    height: 20px;
    left: 3px;
    top: 25%;
  }
`;

const StyledInputWrapper = styled.span<StyledInputProps>`
  position: relative;
  & input {
    padding: ${({ variant, theme }) =>
      variant === 'sm'
        ? theme.controlSizes.sm
        : variant === 'lg'
        ? theme.controlSizes.lg
        : theme.controlSizes.xl};
    transition: outline 0.5s ease;
    border: 1px solid white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
    background-color: ${({ light, theme }) => (light ? '' : theme.colors.gray[10])};
    ${({ icon }) => icon && 'padding-left: 2.5rem'};
  }

  ${({ icon }) => icon && StyledIcon}

  & input:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue[500]};
    border: 1px solid white;
  }
`;

export default StyledInputWrapper;
