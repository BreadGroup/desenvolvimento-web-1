import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    ${props => {
      const theme = props.theme;

      let append = '';

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      })
      return append;
    }}
  }

  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }

  html {
    /* max-height: 100%;
    max-width: 100%;

    width: 100%;
    height: 100%; */
    background: var(--background-color);
    color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: black;
  }

  body::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
  }

  main {
    margin-left: 5rem;
    padding: 1rem;
  }

  @media only screen and (max-width: 600px) {
    main {
      margin: 0;
      margin-bottom: 5rem;
    }
  }
`;
