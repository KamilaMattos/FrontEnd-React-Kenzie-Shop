import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
        --white: #fff;
        --salmon: #fa7f72;
        --ligth-salmon: #fdcfca;
        --grey:  #282c34;
    }
    body {
        background: var(--white);
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
   
`
