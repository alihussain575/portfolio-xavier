import ProjectsMasonry from "../../components/ProjectsMasonry";
import FadeUp from "../../components/FadeUp";
import { getAllProjects } from "../../lib/fetchers";
import { Metadata } from "next";
import { commonMetadata } from "../../utils/commonMetadata";

export const metadata: Metadata = {
	...commonMetadata,
	title: "Projects | Daniil Kovach",
	description: "An archive of K0D0D's projects"
};

const Projects = async () => {
	const projects = await getAllProjects();

	return (
		<>
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
};

export default Projects;
