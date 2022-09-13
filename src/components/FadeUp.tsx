import { Reveal, RevealProps } from "react-awesome-reveal";
import { fadeUpKeyframes } from "../utils/revealKeyframes";

interface IProps extends RevealProps {
	children: React.ReactNode;
	[x: string]: any;
}

const FadeUp = ({ children, ...rest }: IProps) => (
	<Reveal
		keyframes={fadeUpKeyframes}
		duration={800}
		fraction={0.3}
		triggerOnce
		{...rest}
	>
		{children}
	</Reveal>
);

export default FadeUp;
