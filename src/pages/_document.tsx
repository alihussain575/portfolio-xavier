import clsx from "clsx";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
	<Html>
		<Head>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<body
			className={clsx(
				"font-inter text-primary-light bg-white dark:bg-[#0b0b10] dark:text-primary-dark",
				"scrollbar scrollbar-thumb-teal-500 scrollbar-thumb-rounded-md scrollbar-thin",
				"hover:scrollbar-thumb-teal-600 active:scrollbar-thumb-teal-700 transition duration-100"
			)}
		>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
