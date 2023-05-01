import { Metadata } from "next";

const title = "Xavier Johnson";
const description = "Xavier Johnson is a self-taught front-end developer from Ukraine.";
const url = new URL(process.env.NEXT_PUBLIC_BASE_URL || "");
const image =
	"https://user-images.githubusercontent.com/87868068/190473109-58416bd1-c3dc-47a5-9ed2-4acf2f4aaf75.png";

export const commonMetadata: Metadata = {
	title,
	description,
	metadataBase: url,
	openGraph: {
		title,
		description,
		url,
        siteName: "Xavier Johnson's portfolio",
		images: {
			url: image,
			width: 1280,
			height: 630
		},
		type: "website",
        locale: "en-US"
	},
	twitter: {
		title,
		description,
		card: "summary_large_image",
		images: [image]
	},
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "cyan" },
		{ media: "(prefers-color-scheme: dark)", color: "black" }
	],
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
	}
};
