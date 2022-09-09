import Image from "next/image";
import aboutImage from "../assets/about.svg";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";

const About = () => (
	<FlexSection>
		<FlexSectionImage>
			<Image src={aboutImage} layout="fill" alt="about" />
		</FlexSectionImage>
		<FlexSectionText className="sectionText">
			<h2 className="h2">About me</h2>
			<p className="p">
				Hey there! My name's Daniil, I'm an ambitious{" "}
				<span className="accent">front-end</span> developer from Ukraine. I have a
				passion for creating beautiful and creative websites.
				<br />
				<br /> Although I have my favorite tech stack,{" "}
				<span className="accent">Next.js</span> +{" "}
				<span className="accent">TypeScript</span>, I like learning and
				experimenting with new technologies.
				<br />
				<br />
				When I'm not coding, you can find me spending time with my family and
				friends, watching travel shows, or reading dystopian novels.
			</p>
		</FlexSectionText>
	</FlexSection>
);

export default About;
