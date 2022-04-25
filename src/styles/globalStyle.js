import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
input, button, textarea {
    border: none;
}

* 
{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body
{
    height: 100vh;
    width: 100%;
    backgound-color: #E5E5E5;
}


`

export default GlobalStyle;