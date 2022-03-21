import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
    }

    body{

        font-family: Roboto, "sans-serif";
        font-size: 16px;
    }
`;
