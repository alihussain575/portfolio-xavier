import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import config from "./config";

if (!config.projectId) {
	throw Error("The Project ID is not set. Check your environment variables");
}

export const sanityClient = createClient(config);

export const urlFor = (src: SanityImageSource) => 
	createImageUrlBuilder(config).image(src);
