import twclsx from "../utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import FadeZoom from "./FadeZoom";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
	[x: string]: any;
}

const SectionImage = ({ className = "", children, ...rest }: IProps) => (
	<div
		className={twclsx(
			"absolute right-0 bottom-1/2 translate-y-1/2 z-[-1]",
			"pb-[min(100%,18rem)] max-w-sm w-full flex-[0.7] opacity-5",
			"md:relative md:right-auto md:bottom-auto md:translate-y-0 md:z-0",
			"md:pb-[30%] md:max-w-none md:opacity-100",
			className
		)}
		{...rest}
	>
		<FadeZoom
			className="absolute w-full h-full"
			delay={400}
		>
			{children}
		</FadeZoom>
	</div>
);

export default SectionImage;
