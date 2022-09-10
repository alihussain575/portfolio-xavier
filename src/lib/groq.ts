import { groq } from "next-sanity";

export const skillsQuery = groq`
    *[_type == "skill"] | order(_createdAt asc)
`;

export const featuredProjectsQuery = groq`
    *[_type == "project" && featured == true] | order(_createdAt desc) {
        title,
        description,
        slug,
        coverImage,
        githubUrl,
        demoUrl
    }
`;
