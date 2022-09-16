import Head from "next/head";
import { useRouter } from "next/router";

interface IProps {
	title?: string;
	description?: string;
	image?: string;
}

const Meta = ({
	title = "Daniil Kovach",
	description = "Daniil Kovach is a self-taught front-end web developer from Ukraine.",
	image = "https://user-images.githubusercontent.com/87868068/190473109-58416bd1-c3dc-47a5-9ed2-4acf2f4aaf75.png"
}: IProps) => {
	const { pathname } = useRouter();

	const fullUrl = process.env.NEXT_PUBLIC_BASE_URL + pathname;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={fullUrl} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta
				name="google-site-verification"
				content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
			/>
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
	);
};

export default Meta;
