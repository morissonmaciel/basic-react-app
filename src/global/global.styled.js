import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        box-sizing: border-box;

        font-size: 9px;
        font-family: monospace;
        color: rgb(10, 10, 22);
    }
`;

export const AppContents = styled.div`
    padding: 8px 16px;
`;