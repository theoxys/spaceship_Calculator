import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background: #262626;
        -webkit-font-smoothing: antialiased;
    }

    body, button, input{
        font: 16px sans-serif;
        font-family: 'Poppins';
    }

    #root{
        max-width: 1040px;
        margin: 0 auto;
        padding:  0;
    }

    button{
        cursor: pointer;
    }
`;
