import React from "react";
import { NavBar } from "./components/NavBar";
import { GlobalStyle, AppContents } from "./global/global.styled";
import ReactLogo from "./assets/images/react-logo.png";
import { PopOver } from "./components/PopOver";

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <AppContents>
                <PopOver>
                    <img src={ReactLogo} width={128} />
                </PopOver>
                <br />
                This is a lightweight React app based on a simple and faster structure.
            </AppContents>
        </>
    );
};