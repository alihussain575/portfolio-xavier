const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    apiVersion: "2022-09-10",
    useCdn: process.env.NODE_ENV === "production"
};

export default config;