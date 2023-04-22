import twclsx from "../utils/twclsx";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

interface IProps
	extends DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	href: string;
	title: string;
	Icon: React.ReactNode;
	iconClassName?: string;
}

const SocialLink = ({ href, title, Icon, className, iconClassName, ...rest }: IProps) => (
	<a
		className={twclsx(
			"flex items-center space-x-2 font-medium text-secondary-light hoverLink dark:text-secondary-dark",
			className
		)}
		href={href}
		target="_blank"
		rel="noreferrer"
		{...rest}
	>
		<span className={twclsx("text-xl", iconClassName)}>{Icon}</span>
		<span>{title}</span>
	</a>
);

export default SocialLink;
