import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import clsx from "clsx";
import { ITag } from "../types";
import Tag from "./Tag";
import { urlFor } from "../lib/sanity";

interface IProps {
	title: string;
	tags: ITag[];
	description: string;
	imageUrl: string;
	ghUrl: string;
	demoUrl: string;
}

const ProjectCard = ({ title, tags, description, imageUrl, ghUrl, demoUrl }: IProps) => (
	<div className="block ring-1 ring-zinc-100 group rounded-xl dark:ring-primary-light">
		<a
			className="relative block pb-[55%] bg-teal-500 cursor-pointer select-none overflow-hidden"
			href={demoUrl}
			target="_blank"
			rel="noreferrer"
		>
			<Image
				className={clsx(
					"transition duration-300 group-hover:opacity-60 group-hover:scale-125",
					"group-focus-within:opacity-60 group-focus-within:scale-125"
				)}
				src={imageUrl}
				fill
				alt={title}
			/>
		</a>
		<div className="px-4 pt-3 pb-6">
			<div className="flex justify-between text-lg">
				<a
					className="font-bold hoverLink"
					href={demoUrl}
					target="_blank"
					rel="noreferrer"
				>
					{title}
				</a>
				<div className="flex space-x-4">
					<a
						className="flex items-center hoverIcon"
						href={ghUrl}
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />
					</a>
					<a
						className="flex items-center hoverIcon"
						href={demoUrl}
						target="_blank"
						rel="noreferrer"
					>
						<FiExternalLink />
					</a>
				</div>
			</div>
			<a
				className="block mt-2 mr-[14%] text-sm"
				href={demoUrl}
				target="_blank"
				rel="noreferrer"
			>
				{description}
			</a>
			<div className="flex space-x-2 mt-4 text-xs">
				{tags.map((tag, index) => (
					<Tag
						title={tag.title}
						imageUrl={urlFor(tag.image).url()}
						key={index}
					/>
				))}
			</div>
		</div>
	</div>
);

export default ProjectCard;
