import { keyframes } from "@emotion/react";

export const fadeUpKeyframes = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const fadeDownKeyframes = keyframes`
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const fadeZoomKeyframes = keyframes`
    from {
        opacity: 0;
        transform: scale(0.3);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;
