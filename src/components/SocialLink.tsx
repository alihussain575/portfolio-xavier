import twclsx from "../utils/twclsx";

interface IProps {
	href: string;
	title: string;
	Icon: React.ReactNode;
	className?: string;
	iconClassName?: string;
}

const SocialLink = ({ href, title, Icon, className, iconClassName }: IProps) => (
	<a
		className={twclsx(
			"flex items-center space-x-2 font-medium text-secondary-light hoverLink dark:text-secondary-dark",
			className
		)}
		href={href}
		target="_blank"
	>
		<span className={twclsx("text-xl", iconClassName)}>{Icon}</span>
		<span>{title}</span>
	</a>
);

export default SocialLink;
