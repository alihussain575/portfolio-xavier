import { allProjectsQuery } from "../../lib/groq";
import { sanityClient } from "../../lib/sanity";
import { IProject } from "../../types";
import { GetStaticProps } from "next";
import ProjectsMasonry from "../../components/ProjectsMasonry";
import FadeUp from "../../components/FadeUp";
import Meta from "../../components/Meta";

interface IProps {
	projects: IProject[];
}

const Projects = ({ projects }: IProps) => (
	<>
		<Meta
			title="Projects | Daniil Kovach"
			description="An archive of things that I've worked on."
		/>
		<section className="max-w-2xl mt-20 mx-auto md:max-w-none md:mt-28">
			<ProjectsMasonry
				projects={projects}
				FirstItem={
					<div>
						<FadeUp cascade damping={0.15}>
							<h1 className="h1">My projects</h1>
							<p className="mt-6">
								Here's an archive of things that I've worked on:
							</p>
						</FadeUp>
					</div>
				}
			/>
		</section>
	</>
);

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
	const projects = await sanityClient.fetch(allProjectsQuery);

	return {
		props: {
			projects
		},
		revalidate: 60
	};
};
