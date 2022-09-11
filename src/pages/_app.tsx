import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider attribute="class">
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
);

export default MyApp;
