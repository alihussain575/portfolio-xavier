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
