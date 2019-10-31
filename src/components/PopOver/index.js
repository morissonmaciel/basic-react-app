import React from "react";
import { AnimatedContainer } from "./index.styled";

export const PopOver = ({ children }) => {
    return (
        <AnimatedContainer>
            {children}
        </AnimatedContainer>
    );
};