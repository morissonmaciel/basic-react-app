import React from "react";
import { NavBar } from "./components/NavBar";
import { GlobalStyle, AppContents } from "./global/global.styled";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <AppContents>
                <h1>This is a lightweight React app based on a simple and faster structure.</h1>
            </AppContents>
        </>
    );
};