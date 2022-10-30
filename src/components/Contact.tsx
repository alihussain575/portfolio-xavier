import Image from "next/image";
import contactImage from "../assets/contact.svg";
import ButtonLink from "./ButtonLink";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";
import SanityText from "./SanityText";

interface IProps {
	text: object[];
}

const Contact = ({ text }: IProps) => (
	<FlexSection id="contact">
		<FlexSectionText>
			<h2 className="h2">Get in touch</h2>
			<SanityText className="mb-6" content={text} />
			<ButtonLink href="mailto:kovach.daniil.js@gmail.com" variant="primary">
				Contact me
			</ButtonLink>
		</FlexSectionText>
		<FlexSectionImage className="flex-1 md:pb-[25%]">
			<Image src={contactImage} layout="fill" alt="contact" />
		</FlexSectionImage>
	</FlexSection>
);

export default Contact;
