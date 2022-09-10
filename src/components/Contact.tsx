import Image from "next/image";
import contactImage from "../assets/contact.svg";
import ButtonLink from "./ButtonLink";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";

const Contact = () => (
	<FlexSection id="contact">
		<FlexSectionText>
			<h2 className="h2">Get in touch</h2>
			<p className="p mb-6">
				Do you have an idea? An opportunity that match my profile? Feel free to
				reach me for any collaboration or work opportunities, I'm{" "}
				<span className="accent">always open</span> to new challenges.
			</p>
			<ButtonLink
				href="mailto:kovach.daniil.js@gmail.com"
				variant="primary"
			>
				Contact me
			</ButtonLink>
		</FlexSectionText>
		<FlexSectionImage className="flex-1 md:pb-[25%]">
			<Image src={contactImage} layout="fill" alt="contact" />
		</FlexSectionImage>
	</FlexSection>
);

export default Contact;
