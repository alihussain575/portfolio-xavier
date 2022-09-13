import { Reveal, RevealProps } from "react-awesome-reveal";
import { fadeZoomKeyframes } from "../utils/revealKeyframes";

interface IProps extends RevealProps {
	children: React.ReactNode;
	[x: string]: any;
}

const FadeZoom = ({ children, ...rest }: IProps) => (
	<Reveal
		keyframes={fadeZoomKeyframes}
		duration={800}
		fraction={0.3}
		triggerOnce
		{...rest}
	>
		{children}
	</Reveal>
);

export default FadeZoom;
