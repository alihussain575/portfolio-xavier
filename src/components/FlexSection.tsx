import twclsx from "../utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const FlexSection = ({ className = "", children, ...rest }: IProps) => (
	<section
		className={twclsx(
			"relative mt-20 space-x-0 mx-auto flex max-w-2xl justify-between",
			"md:mt-28 md:space-x-12 md:max-w-none md:items-center",
			className
		)}
		{...rest}
	>
		{children}
	</section>
);

export default FlexSection;
