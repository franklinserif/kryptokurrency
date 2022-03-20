import styled, { DefaultTheme } from 'styled-components';

type StyleNavbarPropsType = {
  theme: DefaultTheme;
};

export const StyledNavbar = styled.nav<StyleNavbarPropsType>`
  & {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  & .navigation {
    position: relative;
    top: 20px;
    width: 100%;
  }

  & .navigation-menu {
    width: 100%;
    overflow: visible;
    list-style: none;
  }

  & .menu-item {
    padding: 0.5rem 0;
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  & .navigation-options > * {
    width: 100%;
    margin: 0.4rem;
  }

  & .navigation-options > span {
    width: 100%;
  }

  & span input {
    width: 99%;
  }

  @media (min-width: 767px) {
    & {
      display: flex;
      justify-content: space-between;
      box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }

    & .logo {
      width: 20%;
    }

    & .navigation {
      position: static;
      display: flex;
      justify-content: space-around;
      width: 65%;
    }

    & .navigation-menu {
      position: static;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      max-width: 250px;
      margin-left: auto;
      margin-right: 2rem;
    }

    & .navigation-options {
      position: static;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      max-width: 370px;
    }

    & .navigation-options > span {
      width: 100%;
    }

    & span input {
      min-width: 220px;
    }
  }
`;
