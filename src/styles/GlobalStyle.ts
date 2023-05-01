import "@web-atoms/data-styles/data-styles";

import styled from "@web-atoms/core/dist/style/styled";

    styled.css `
        body, html {
            margin: 0;
            padding: 0;
            color: #294D4A;
        }

        * {
            font-family: trebuchet ms, "Source Sans Pro", verdana;
            box-sizing: border-box;
        }

        :root {
            --accent-color: #eb5d1e;
            --accent-text-color: white;
            --spacing: 5px;
            --spacing-medium: 7px;
            --spacing-large: 10px;
            --link-color: #3535fa;
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