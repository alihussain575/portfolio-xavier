import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import useSmoothScroll from "../hooks/useSmoothScroll";

const MyApp = ({ Component, pageProps }: AppProps) => {
	useSmoothScroll();

	return (
		<ThemeProvider attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default MyApp;
