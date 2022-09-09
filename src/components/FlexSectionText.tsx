import twclsx from "../utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
	[x: string]: any;
}

const FlexSectionText = ({ className = "", children, ...rest }: IProps) => (
	<div className={twclsx("flex-1", className)} {...rest}>
		{children}
	</div>
);

export default FlexSectionText;
