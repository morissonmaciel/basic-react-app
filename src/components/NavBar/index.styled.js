import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    background-color: rgb(47, 30, 46);
    width: 100%;
    height: 64px;
    padding: 0 16px;
`;

export const Title = styled.span`
    font-size: 24px;
    font-family: monospace;
    color: rgb(214, 222, 235);
`;