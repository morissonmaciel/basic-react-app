import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        box-sizing: border-box;

        font-size: 12pt;
        font-weight: 400;
        font-family: "Segoe UI", "Helvetica Neue", sans-serif;
        color: rgb(10, 10, 22);
    }
`;

export const AppContents = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 8px 16px;
`;