import Image from "next/image";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";
import SanityText from "./SanityText";
import { getAbout } from "../lib/fetchers";

const About = async () => {
	const { body } = await getAbout();

	return (
		<FlexSection id="about">
			<FlexSectionImage>
				<Image src="/about.svg" fill alt="about" />
			</FlexSectionImage>
			<FlexSectionText className="sectionText">
				<h2 className="h2">About me</h2>
				<SanityText content={body} />
			</FlexSectionText>
		</FlexSection>
	);
};

export default About as unknown as () => JSX.Element;
