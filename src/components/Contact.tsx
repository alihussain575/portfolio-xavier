import Image from "next/image";
import ButtonLink from "./ButtonLink";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";
import SanityText from "./SanityText";
import { getContact } from "../lib/fetchers";

const Contact = async () => {
	const { body } = await getContact();

	return (
		<FlexSection id="contact">
			<FlexSectionText>
				<h2 className="h2">Get in touch</h2>
				<SanityText className="mb-6" content={body} />
				<ButtonLink href="mailto:xavierb2531@gmail.com" variant="primary">
					Contact me
				</ButtonLink>
			</FlexSectionText>
			<FlexSectionImage className="flex-1 md:pb-[25%]">
				<Image src="/contact.svg" fill alt="contact" />
			</FlexSectionImage>
		</FlexSection>
	);
};

export default Contact as unknown as () => JSX.Element;
