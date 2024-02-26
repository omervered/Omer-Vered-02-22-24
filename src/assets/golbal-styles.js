import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.text}; 
    background-color: ${(props) => props.theme.body};
    font-size: 1rem;
    box-sizing: border-box;
  }

  div {
    
  }

  h1 {
    font-size: 1.8rem;
    margin: 0;
  }

  h2 {
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
      font-size: 0.6rem; 
    }

    h1 {
      font-size: 0.8rem; 
    }

    h2 {
      font-size: 0.6rem; 
    }
  }
`;
