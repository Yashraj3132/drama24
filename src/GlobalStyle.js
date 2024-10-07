// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif; /* Use a more neutral font for better readability */
  }
  
  body {
    background-color: #f0f4f8; /* Matches the background of the container */
    margin: 0;
  }
`;

export default GlobalStyle;
