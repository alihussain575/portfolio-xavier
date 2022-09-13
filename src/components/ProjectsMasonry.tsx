import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";
import { IProject } from "../types";
import { urlFor } from "../lib/sanity";
import FadeUp from "./FadeUp";
import twclsx from "../utils/twclsx";

const breakpoints = {
	default: 2,
	767: 1
};

interface IProps {
	projects: IProject[];
	FirstItem?: React.ReactNode;
	LastItem?: React.ReactNode;
	className?: string;
	columnClassName?: string;
}

const ProjectsMasonry = ({
	projects,
	FirstItem,
	LastItem,
	className = "",
	columnClassName = ""
}: IProps) => (
	<Masonry
		className={twclsx("mx-auto flex w-full gap-12", className)}
		columnClassName={twclsx("space-y-12", columnClassName)}
		breakpointCols={breakpoints}
	>
		{FirstItem}
		{projects.map((project) => (
			<FadeUp key={project._id}>
				<ProjectCard
					title={project.title}
					description={project.description}
					imageUrl={urlFor(project.coverImage).url()}
					ghUrl={project.githubUrl}
					demoUrl={project.demoUrl}
				/>
			</FadeUp>
		))}
		{LastItem}
	</Masonry>
);

export default ProjectsMasonry;
