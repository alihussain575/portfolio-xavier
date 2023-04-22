"use client"

import clsx from "clsx";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import { useLoaded } from "../hooks/useLoaded";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const loaded = useLoaded();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<button
			className={clsx(
				"flex justify-center items-center p-1.5 text-xl hoverLink rounded-md",
				"ring-1 ring-zinc-100 dark:ring-primary-light"
			)}
			onClick={toggleTheme}
		>
			{loaded && (theme === "dark" ? <BiSun /> : <BiMoon />)}
		</button>
	);
};

export default ThemeSwitcher;
