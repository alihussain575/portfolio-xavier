import ProjectsMasonry from "../../components/ProjectsMasonry";
import FadeUp from "../../components/FadeUp";
import { getAllProjects } from "../../lib/fetchers";
import { Metadata } from "next";
import { commonMetadata } from "../../utils/commonMetadata";
import ParticleCanvas from "../../components/Canvas";

export const metadata: Metadata = {
	...commonMetadata,
	title: "Projects | Xavier Johnson",
	description: "An archive of Xavier's projects"
};

const Projects = async () => {
	const projects = await getAllProjects();

	return (
		<>
			<section className="max-w-2xl mt-20 mx-auto md:max-w-none md:mt-28">
				<ParticleCanvas />
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
