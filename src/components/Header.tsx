import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import logo from "../assets/logo.svg";
import { BiMoon } from "react-icons/bi";

const Header = () => (
	<header
		className={clsx(
			"fixed w-full py-4 border-b border-zinc-100 bg-white text-secondary-light",
			"select-none z-50"
		)}
	>
		<Wrapper className="flex items-center justify-between">
			<Link href="/">
				<a className="relative h-6 w-14 flex items-center">
					<Image src={logo} layout="fill" alt="logo" />
				</a>
			</Link>
			<div className="flex">
				<nav className="hidden font-medium md:flex md:items-center md:space-x-8 md:mr-5">
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
				</nav>
				<button
					className={clsx(
						"flex justify-center items-center p-1.5 text-xl hoverLink",
						"ring-1 ring-zinc-100 rounded-md"
					)}
				>
					<BiMoon />
				</button>
			</div>
		</Wrapper>
	</header>
);

export default Header;
