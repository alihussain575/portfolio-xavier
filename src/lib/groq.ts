import { groq } from "next-sanity";

export const skillsQuery = groq`
    *[_type == "skill"] | order(_createdAt asc) {
        _id,
	    title,
	    image
    }
`;

export const featuredProjectsQuery = groq`
    *[_type == "project" && featured == true] | order(_createdAt desc) {
        _id,
        title,
        tags,
        description,
        coverImage,
        githubUrl,
        demoUrl
    }
`;

export const allProjectsQuery = groq`
    *[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        tags,
        description,
        coverImage,
        githubUrl,
        demoUrl
    }
`;