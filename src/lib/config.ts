const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    apiVersion: "2023-04-22",
    useCdn: process.env.NODE_ENV === "production"
};

export default config;