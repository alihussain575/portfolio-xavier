import clsx from "clsx";
import Link from "next/link";
import twclsx from "../utils/twclsx";

interface IProps {
	href: string;
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	className?: string;
	isExternal?: boolean;
	[x: string]: any;
}

const ButtonLink = ({
	href,
	children,
	variant = "primary",
	className = "",
	isExternal = false,
	...rest
}: IProps) => (
	<Link
		className={twclsx(
			"block max-w-fit px-5 py-2 rounded-lg select-none transition duration-150",
			variant === "primary"
				? "text-white bg-teal-500 hover:bg-teal-600 hover:text-zinc-300"
				: clsx(
						"text-secondary-light bg-zinc-100 hover:bg-zinc-200 hover:text-primary-light",
						"dark:bg-primary-light dark:text-primary-dark dark:hover:bg-[#333246] dark:hover:text-secondary-dark"
				  ),
			className
		)}
		href={href}
		target={isExternal ? "_blank" : "_self"}
		rel="noreferrer"
		{...rest}
	>
		{children}
	</Link>
);

export default ButtonLink;
