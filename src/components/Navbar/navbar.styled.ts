import styled, { DefaultTheme } from 'styled-components';

type StyleNavbarPropsType = {
  theme: DefaultTheme;
};

export const StyledNavbar = styled.nav<StyleNavbarPropsType>`
  & {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0.5rem 1.5rem 0.5rem;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .logo-container {
    z-index: 999;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[10]};
    padding: 0.5rem 0;
  }

  .logo-container span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-container span .logo {
    width: 15%;
  }

  & .navigation {
    position: absolute;
    top: 60px;
    width: 100%;
    padding: 0.5rem 1rem 1.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 10px 30px 30px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in;
    transform: translateY(0px);
  }

  .navigation-active {
    transform: translateY(0px);
  }

  ul {
    list-style: none;
  }

  & .menu-item {
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.blue[300]};
  }

  & .navigation-options span,
  & .navigation-options input,
  & .navigation-options button {
    width: 100%;
  }

  & .navigation-options button {
    margin-top: 1rem;
    width: 100%;
  }

  @media (min-width: 900px) {
    & {
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 1rem;
    }

    .logo-container {
      width: 20%;
      border: none;
    }

    & .navigation {
      position: static;
      width: 80%;
      background-color: transparent;
      box-shadow: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    & .navigation .navigation-menu {
      margin-left: auto;
      margin-right: 2rem;
      width: 100%;
      max-width: 220px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .navigation-options {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .navigation-options span {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }

    & .navigation-options span input {
      width: 100%;
      max-width: 450px;
    }

    & .navigation-options button {
      margin: 0;
      width: 45%;
    }
  }
`;
