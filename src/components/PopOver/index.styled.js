import React from "react";
import styled, { keyframes } from "styled-components";

const pulseKeyFrames = keyframes`
    0% {
        transform: scale(0.9)
    }

    100% {
        transform: scale(1.0)
    }
`;

export const AnimatedContainer = styled.div`
    cursor: pointer;
    transform-origin: 50% 50%;
    transition: transform 300ms ease-in-out;
    animation: ${pulseKeyFrames} 2s ease-in-out 0s infinite alternate;

    &:hover {
        animation-play-state: paused;

    }
`;