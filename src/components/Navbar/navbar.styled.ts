import styled, { DefaultTheme } from 'styled-components';

type StyleNavbarPropsType = {
  theme: DefaultTheme;
};

export const StyledNavbar = styled.nav<StyleNavbarPropsType>`
  & {
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  & .navigation-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 25%;
    max-width: 250px;
  }

  & .menu-item a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray[500]};
    font-weight: ${({ theme }) => theme.fontWeight[300]};
    transition: all 0.2s ease;
    letter-spacing: 0.1rem;
  }

  & .menu-item a:hover {
    color: ${({ theme }) => theme.colors.blue[300]};
  }

  & .navigation-options {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
`;
