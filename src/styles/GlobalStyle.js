import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --background-color: white;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1rem;
    }

    body{
        background-color: var(--background-color) ;
    }
`;


export default GlobalStyle;