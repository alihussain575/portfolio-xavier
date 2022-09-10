import Image from "next/image";

interface IProps {
	title: string;
	imageUrl: string;
}

const SkillItem = ({ title, imageUrl }: IProps) => (
	<div className="p-2 py-4 h-fit flex flex-col items-center ring-1 rounded-lg ring-zinc-100">
		<div className="relative w-10 h-10">
			<Image src={imageUrl} layout="fill" alt={title} />
		</div>
		<p className="mt-4 font-medium">{title}</p>
	</div>
);

export default SkillItem;
