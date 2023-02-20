import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        /* box-shadow:  0 0 0 2px ${(props) => props.theme.colors["base-hover"]}; */
    }

    body{
        background: ${(props) => props.theme.colors["background"]};
        color: ${(props) => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    header {
        font-family: ${(props) => props.theme.fonts.title}, cursive;
    }

    body, input, textarea, button {
        font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
        font-weight: 400;
        font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    }

    button {
        cursor: pointer;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

`;
