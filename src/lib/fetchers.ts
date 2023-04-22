import { IAbout, IIntro, IProject, ISkill } from "../types";
import {
	aboutQuery,
	allProjectsQuery,
	contactQuery,
	featuredProjectsQuery,
	introQuery,
	skillsQuery
} from "./groq";
import { sanityClient } from "./sanity";

const getIntro = async () => {
	const intro = await sanityClient.fetch(introQuery);

	return intro as IIntro;
};

const getAbout = async () => {
	const about = await sanityClient.fetch(aboutQuery);

	return about as IAbout;
};

const getSkills = async () => {
	const skills = await sanityClient.fetch(skillsQuery);

	return skills as ISkill[];
};

const getFeaturedProjects = async () => {
	const projects = await sanityClient.fetch(featuredProjectsQuery);

	return projects as IProject[];
};

const getAllProjects = async () => {
	const projects = await sanityClient.fetch(allProjectsQuery);

	return projects as IProject[];
};

const getContact = async () => {
	const about = await sanityClient.fetch(contactQuery);

	return about as IAbout;
};

export { getIntro, getAbout, getSkills, getFeaturedProjects, getAllProjects, getContact };
