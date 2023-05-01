import { groq } from "next-sanity";

export const introQuery = groq`*[_type == "intro"][0] {
    largeText,
    smallText
}`;

export const aboutQuery = groq`*[_type == "about"][0] {
    body
}`;

export const contactQuery = groq`*[_type == "contact"][0] {
    body
}`;

export const spareTimeQuery = groq`
    *[_type =='spare'] | order(_createdAt asc) {
        _id,
	    description,
	    image
    }
`;

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