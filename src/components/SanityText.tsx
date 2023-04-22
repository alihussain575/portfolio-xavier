import PortableText from "react-portable-text";

interface IProps {
	content: object[];
	className?: string;
}

const SanityText = ({ content, className }: IProps) => (
	<PortableText
		content={content}
		dataset={process.env.SANITY_DATASET}
		projectId={process.env.SANITY_PROJECT_ID}
		className={className}
		serializers={{
			em: (props: any) => <em className="text-teal-500 not-italic" {...props} />,
			link: ({ href, children }: any) => (
				<a className="text-teal-500 underline hoverLink" href={href}>
					{children}
				</a>
			)
		}}
	/>
);

export default SanityText;
