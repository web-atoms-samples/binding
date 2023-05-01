import "@web-atoms/data-styles/data-styles";

import styled from "@web-atoms/core/dist/style/styled";

    styled.css `
        body, html {
            
        }

        * {
            font-family: verdana;
            box-sizing: border-box;
        }

        :root {
            --accent-color: blue;
            --accent-text-color: white;
        }

        h1, h2, h3, h4, h5, h6 {
            margin-block-start: 0.25em;
            margin-block-end: 0.25em;
        }

        a {
            text-decoration: underline;
            color: blue;
            cursor: pointer;
        }
    `.installGlobal();