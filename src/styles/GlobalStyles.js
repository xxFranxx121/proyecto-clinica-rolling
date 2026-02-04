import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* RESET GENERAL */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.background} 0%,
      #f2f6fb 100%
    );
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* TÍTULOS */
  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  /* TEXTO */
  p {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
  }

  /* LINKS */
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  /* LISTAS */
  ul {
    list-style: none;
  }

  /* BOTONES GENERALES */
  button {
    font-family: inherit;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    transition: all 0.2s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }
`;
