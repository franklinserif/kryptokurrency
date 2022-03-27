import styled, { DefaultTheme } from 'styled-components';

type StyleModalPropsType = {
  theme: DefaultTheme;
};

export const StyledModal = styled.article<StyleModalPropsType>`
  & {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
  }

  & .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
  & .modal-window {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.gray[10]};
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.1));
    z-index: 3;
    font-family: Roboto, sans-serif;
  }

  & .modal-window---heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .modal-window--content {
    text-align: justify;
    line-height: 1.4rem;
  }
`;
