import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props: DefaultTheme) => props.colors.blue[100]};
`;
