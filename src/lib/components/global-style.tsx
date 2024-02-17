import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { createGlobalStyle, css } from "styled-components";
import { camelCaseToKebabCase, cssVariablesColorFix } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const cssVariablesGenerator = css`
  ${({ theme }) =>
    Object.entries(theme.palette)
      .map(([key, value]) => `--${camelCaseToKebabCase(key)}: ${cssVariablesColorFix(value)}`)
      .join(";\n")};
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ${ibmPlexMono.style.fontFamily}, "ui-monospace", "Menlo", "Monaco", "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
    --font: ${ibmPlexSans.style.fontFamily}, -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

   ${cssVariablesGenerator};
  }

  * {
    box-sizing: border-box;
      margin: 0;
    padding: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    color: rgb(var(--foreground));
      font-family: var(--font);
    background: rgb(var(--background));
  }

  pre, code {
    font-family: var(--font-mono);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  ul, ol {
    padding-left: 24px;
  }
`;

export default GlobalStyle;
