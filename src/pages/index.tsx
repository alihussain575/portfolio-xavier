import type { GetStaticProps } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Intro from "../components/Intro";
import Meta from "../components/Meta";
import Skills from "../components/Skills";
import {
	introQuery,
	aboutQuery,
	featuredProjectsQuery,
	skillsQuery,
	contactQuery
} from "../lib/groq";
import { sanityClient } from "../lib/sanity";
import { IIntro, IAbout, IContact, IProject, ISkill } from "../types";

interface IProps {
	intro: IIntro;
	about: IAbout;
	contact: IContact;
	skills: ISkill[];
	projects: IProject[];
}

const Home = ({ intro, about, contact, skills, projects }: IProps) => (
	<>
		<Meta />
		<Intro largeText={intro.largeText} smallText={intro.smallText} />
		<About text={about.body} />
		<Skills skills={skills} />
		<FeaturedProjects projects={projects} />
		<Contact text={contact.body} />
	</>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const intro = await sanityClient.fetch(introQuery);
	const about = await sanityClient.fetch(aboutQuery);
	const contact = await sanityClient.fetch(contactQuery);
	const skills = await sanityClient.fetch(skillsQuery);
	const projects = await sanityClient.fetch(featuredProjectsQuery);

	return {
		props: {
			intro,
			about,
			contact,
			skills,
			projects
		},
		revalidate: 60
	};
};
