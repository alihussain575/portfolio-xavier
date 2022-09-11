import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import clsx from "clsx";

interface IProps {
	title: string;
	description: string;
	slug: string;
	imageUrl: string;
	ghUrl: string;
	demoUrl: string;
}

const ProjectCard = ({ title, description, slug, imageUrl, ghUrl, demoUrl }: IProps) => (
	<div className="block overflow-hidden ring-1 ring-zinc-100 group rounded-xl dark:ring-primary-light">
		<Link href="/">
			<a className="relative block pb-[55%] bg-teal-500 cursor-pointer select-none">
				<Image
					className={clsx(
						"transition duration-300 group-hover:opacity-60 group-hover:scale-125",
						"group-focus-within:opacity-60 group-focus-within:scale-125"
					)}
					src={imageUrl}
					layout="fill"
				/>
			</a>
		</Link>
		<div className="px-4 pt-3 pb-6">
			<div className="flex justify-between text-lg">
				<Link href="/">
					<a className="font-bold hoverLink">{title}</a>
				</Link>
				<div className="flex space-x-4">
					<a
						className="flex items-center hoverIcon"
						href={ghUrl}
						target="_blank"
					>
						<FaGithub />
					</a>
					<a
						className="flex items-center hoverIcon"
						href={demoUrl}
						target="_blank"
					>
						<FiExternalLink />
					</a>
				</div>
			</div>
			<Link href="/">
				<a className="block mt-2 mr-[14%] text-sm">
					{description}
				</a>
			</Link>
		</div>
	</div>
);

export default ProjectCard;
