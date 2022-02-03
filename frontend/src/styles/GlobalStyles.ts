import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        background: var(--primary);
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
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--bg);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--tertiary);
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--text);
    }
`;
