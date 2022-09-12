import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";
import { IProject } from "../types";
import { urlFor } from "../lib/sanity";
import FadeUp from "./FadeUp";

const breakpoints = {
	default: 2,
	767: 1
};

interface IProps {
	projects: IProject[];
	before?: React.ReactNode;
	after?: React.ReactNode;
}

const ProjectsMasonry = ({ projects, before, after }: IProps) => (
	<Masonry
		className="mx-auto flex flex-row-reverse w-full gap-12"
		columnClassName="space-y-12"
		breakpointCols={breakpoints}
	>
		{before}
		{projects.map((project) => (
			<FadeUp key={project.slug.current}>
				<ProjectCard
					title={project.title}
					description={project.description}
					slug={project.slug.current}
					imageUrl={urlFor(project.coverImage).url()}
					ghUrl={project.githubUrl}
					demoUrl={project.demoUrl}
				/>
			</FadeUp>
		))}
		{after}
	</Masonry>
);

export default ProjectsMasonry;
