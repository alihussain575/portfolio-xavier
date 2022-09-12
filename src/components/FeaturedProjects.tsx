import { IProject } from "../types";
import ButtonLink from "./ButtonLink";
import FadeUp from "./FadeUp";
import ProjectsMasonry from "./ProjectsMasonry";

interface IProps {
	projects: IProject[];
}

const FeaturedProjects = ({ projects }: IProps) => (
	<section className="max-w-2xl mt-20 mx-auto md:max-w-none md:mt-28" id="projects">
		<ProjectsMasonry
			projects={projects}
			before={
				<div>
					<FadeUp cascade damping={0.15}>
						<h2 className="h2">Featured projects</h2>
						<p className="p">
							Here are some of my projects that I've worked on:
						</p>
					</FadeUp>
				</div>
			}
			after={
				<FadeUp>
					<ButtonLink href="/" variant="primary">
						See more projects
					</ButtonLink>
				</FadeUp>
			}
		/>
	</section>
);

export default FeaturedProjects;
