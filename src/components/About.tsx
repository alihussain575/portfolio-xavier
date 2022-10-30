import Image from "next/image";
import aboutImage from "../assets/about.svg";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";
import SanityText from "./SanityText";

interface IProps {
	text: object[];
}

const About = ({ text }: IProps) => (
	<FlexSection id="about">
		<FlexSectionImage>
			<Image src={aboutImage} layout="fill" alt="about" />
		</FlexSectionImage>
		<FlexSectionText className="sectionText">
			<h2 className="h2">About me</h2>
			<SanityText content={text} />
		</FlexSectionText>
	</FlexSection>
);

export default About;
