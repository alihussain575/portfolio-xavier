"use client"

import { Reveal, RevealProps } from "react-awesome-reveal";
import { fadeDownKeyframes } from "../utils/revealKeyframes";

interface IProps extends RevealProps {}

const FadeDown = ({ children, ...rest }: IProps) => (
	<Reveal
		keyframes={fadeDownKeyframes}
		duration={800}
		fraction={0.3}
		triggerOnce
		{...rest}
	>
		{children}
	</Reveal>
);

export default FadeDown;
