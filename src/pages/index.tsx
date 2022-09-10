import type { GetStaticProps } from "next";
import About from "../components/About";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { skillsQuery } from "../lib/groq";
import { sanityClient } from "../lib/sanity";
import { ISkill } from "../types";

interface IProps {
	skills: ISkill[];
}

const Home = ({ skills }: IProps) => (
	<>
		<Intro />
		<About />
		<Skills skills={skills} />
	</>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const skills = await sanityClient.fetch(skillsQuery);

	return {
		props: {
			skills
		},
		revalidate: 60
	};
};