import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import logo from "../assets/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import FadeDown from "./FadeDown";
import { useRouter } from "next/router";

const Header = () => {
	const { pathname } = useRouter();

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
					<Link href="/">
						<a className="relative h-7 w-12 flex items-center">
							<Image src={logo} layout="fill" alt="logo" />
						</a>
					</Link>
					<div className="flex">
						<nav className="hidden font-medium md:flex md:items-center md:space-x-8 md:mr-5">
							{pathname === "/" ? (
								<>
									<Link href="#about">
										<a className="hoverLink">About</a>
									</Link>
									<Link href="#skills">
										<a className="hoverLink">Skills</a>
									</Link>
									<Link href="#projects">
										<a className="hoverLink">Projects</a>
									</Link>
									<Link href="#contact">
										<a className="hoverLink">Contact</a>
									</Link>
								</>
							) : (
								<Link href="/">
									<a className="hoverLink">Home</a>
								</Link>
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
