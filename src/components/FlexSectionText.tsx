import twclsx from "../utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import FadeUp from "./FadeUp";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FlexSectionText = ({ className = "", children, ...rest }: IProps) => (
	<div className={twclsx("flex-1", className)} {...rest}>
		<FadeUp cascade damping={0.15}>
			{children}
		</FadeUp>
	</div>
);

export default FlexSectionText;
