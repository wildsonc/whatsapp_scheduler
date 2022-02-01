import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--primary);
    color: var(--white);
    }
    html, body, #root {
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: sans-serif;
    }
    :root{
        --primary: #262626;
        --secondary: #303030;
        --tertiary: #3b3b3b;
        --bg: #212121;
        --text: #6b6b6b;
        --white: #fcfcfc;
        --company: #ff6c37;
    }
`;
