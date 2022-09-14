import Image from "next/image";

interface IProps {
	title: string;
	imageUrl: string;
}

const Tag = ({ title, imageUrl }: IProps) => (
	<div className="flex items-center space-x-2 px-2 py-1 rounded-md bg-zinc-100 dark:bg-primary-light">
		<div className="relative w-3.5 h-3.5">
			<Image src={imageUrl} layout="fill" alt={title} />
		</div>
		<p className="font-medium">
			{title}
		</p>
	</div>
);

export default Tag;
