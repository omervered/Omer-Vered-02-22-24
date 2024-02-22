import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


   body {
    height: 100%;
    width: 100%;
    font-family: "Poppins", sans-serif;
    background-color: #f9f9fb;
    box-sizing: border-box;
    font-size: 1rem;
  }

  h1{
    font-size: 1.8rem;
    margin: 0;
  }

  h2{
    font-size: 1.3rem;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  @media (max-width: 768px) {
  
    body {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 430px) {
    body {
      font-size: 0.6rem ;
    }

    h1 {
      font-size: 0.8rem;
    }

    h2{
      font-size: 0.6rem;
    }
  }
`;
