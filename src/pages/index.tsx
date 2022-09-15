import type { GetStaticProps } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Intro from "../components/Intro";
import Meta from "../components/Meta";
import Skills from "../components/Skills";
import { featuredProjectsQuery, skillsQuery } from "../lib/groq";
import { sanityClient } from "../lib/sanity";
import { IProject, ISkill } from "../types";

interface IProps {
	skills: ISkill[];
	projects: IProject[];
}

const Home = ({ skills, projects }: IProps) => (
	<>
		<Meta />
		<Intro />
		<About />
		<Skills skills={skills} />
		<FeaturedProjects projects={projects} />
		<Contact />
	</>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const skills = await sanityClient.fetch(skillsQuery);
	const projects = await sanityClient.fetch(featuredProjectsQuery);

	return {
		props: {
			skills,
			projects
		},
		revalidate: 60
	};
};
