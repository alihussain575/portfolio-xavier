"use client"

import clsx from "clsx";
import Image from "next/image";
import Wrapper from "./Wrapper";
import ThemeSwitcher from "./ThemeSwitcher";
import FadeDown from "./FadeDown";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	return (
		<FadeDown className="fixed w-full z-50" delay={800}>
			<header
				className={clsx(
					"fixed w-full py-4 border-b border-zinc-100 bg-white text-secondary-light",
					"dark:bg-[#0b0b10] dark:text-secondary-dark dark:border-primary-light",
					"select-none z-50 transition duration-100"
				)}
			>
				<Wrapper className="flex items-center justify-between">
					<a className="relative h-7 w-12 flex items-center" href="/">
						<Image src="/logo.svg" fill alt="logo" />
					</a>
					<div className="flex">
						<nav className="hidden font-medium md:flex md:items-center md:space-x-8 md:mr-5">
							{pathname === "/" ? (
								<>
									{[
										{ href: "#about", title: "About" },
										{ href: "#skills", title: "Skills" },
										{ href: "#projects", title: "Projects" },
										{ href: "#contact", title: "Contact" }
									].map((item, index) => (
										<a
											className="hoverLink"
											href={item.href}
											key={index}
										>
											{item.title}
										</a>
									))}
								</>
							) : (
								<a className="hoverLink" href="/">
									Home
								</a>
							)}
						</nav>
						<ThemeSwitcher />
					</div>
				</Wrapper>
			</header>
		</FadeDown>
	);
};

export default Header;
