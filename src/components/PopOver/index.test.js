import React from "react";
import { render } from "react-dom";
import should from "should";
import { PopOver } from "./";
import { AnimatedContainer } from "./index.styled";


it("Should match HTML structure", () => {
    const SpanChild = () => (<span>&nbsp;</span>);
    const renderContainer = document.createElement("div");
    const syledRenderContainer = document.createElement("div");

    render(
        <PopOver>
            <SpanChild />
        </PopOver>
        , renderContainer);

    render(
        <AnimatedContainer>
            <SpanChild />
        </AnimatedContainer>
        , syledRenderContainer);

    should(renderContainer.innerHTML)
        .be.eqls(syledRenderContainer.innerHTML);
});