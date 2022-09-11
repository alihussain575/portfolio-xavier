import { IProject } from "../types";
import ButtonLink from "./ButtonLink";
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
					<h2 className="h2">Featured projects</h2>
					<p className="p">Here are some of my projects that I've worked on:</p>
				</div>
			}
			after={
				<ButtonLink className="block w-fit" href="/" variant="primary">
					See more projects
				</ButtonLink>
			}
		/>
	</section>
);

export default FeaturedProjects;
