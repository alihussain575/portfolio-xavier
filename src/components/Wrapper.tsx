import twclsx from "../utils/twclsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Wrapper = ({ children, className = "", ...rest }: IProps) => (
	<div className={twclsx("max-w-6xl w-full mx-auto px-6", className)} {...rest}>
		{children}
	</div>
);

export default Wrapper;
