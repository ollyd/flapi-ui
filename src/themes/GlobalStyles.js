import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => `
    html {
      font-family: 'Roboto', sans-serif;
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.palette.contrast};
      color: ${theme.text.color.primary};
      font-size: 1.6rem;
      line-height: 1.5;
      margin: 0;
      padding: 8rem 15rem;

      @media (max-width: 960px) {
        padding: 8rem 5rem;
      }

      @media (max-width: 600px) {
        padding: 8rem 0.8rem;
      }

      &.no-scroll {
        overflow: hidden;
      }
    }

    html,
    body,
    #root {
      height: 100%;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: ${theme.text.color.primary};
      text-decoration: none;
    }
  `}
`;
