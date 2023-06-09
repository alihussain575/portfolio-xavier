import clsx from "clsx";
import Image from "next/image";

interface IProps {
	title: string;
	imageUrl: string;
}

const SkillItem = ({ title, imageUrl }: IProps) => (
	<li
		className={clsx(
			"p-2 py-4 h-fit flex flex-col items-center ring-1 rounded-lg ring-zinc-100",
			"dark:ring-primary-light dark:bg-primary-light transition duration-100"
		)}
	>
		<div className="relative w-10 h-10">
			<Image src={imageUrl} fill alt={title} />
		</div>
		<p className="mt-4 font-medium">{title}</p>
	</li>
);

export default SkillItem;
