import React from "react";
import { NavBar } from "./components/NavBar";
import { GlobalStyle, AppContents } from "./global/global.styled";
import { Home } from "./views/Home";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <AppContents>
                <Home />
            </AppContents>
        </>
    );
};