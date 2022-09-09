import Image from "next/image";
import Link from "next/link";
import { BsFillFilePdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import introImage from "../assets/intro.svg";
import ButtonLink from "./ButtonLink";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";
import SocialLink from "./SocialLink";

const Intro = () => (
	<FlexSection>
		<FlexSectionText>
			<h2 className="h2">Hello world! I'm -</h2>
			<h1 className="-ml-1 mt-1 font-bold text-6xl">Daniil Kovach</h1>
			<p className="mt-8 text-xl">
				A self-taught <span className="accent">front-end</span> developer with a
				passion for exploration and continual learning. I like to stay up to date
				with technologies to create{" "}
				<Link href="#">
					<a className="hoverLink accent underline">cool projects</a>
				</Link>
				.
			</p>
			<p className="mt-3">
				I'm currently <span className="accent">open to new opportunities</span>,
				so feel free to contact me.
			</p>
			<div className="flex mt-8 space-x-4 font-medium">
				<ButtonLink href="/" variant="primary">
					View projects
				</ButtonLink>
				<ButtonLink href="mailto:kovach.daniil.js@gmail.com" variant="secondary">
					Contact me
				</ButtonLink>
			</div>
			<div className="flex space-x-6 mt-6 text-sm">
				<SocialLink
					href="https://github.com/K0D0D"
					title="GitHub"
					Icon={<BsGithub />}
				/>
				<SocialLink
					href="https://linkedin.com/in/daniil-kovach-k0d0d"
					title="LinkedIn"
					Icon={<BsLinkedin />}
				/>
				<SocialLink
					href="https://drive.google.com/file/d/1ofasGYjbqz2VZpdXdyxBp-BGPOiBjShH/view"
					title="Resume"
					Icon={<BsFillFilePdfFill />}
				/>
			</div>
		</FlexSectionText>
		<FlexSectionImage className="flex-1 md:pb-[35%]">
			<Image src={introImage} layout="fill" alt="intro" />
		</FlexSectionImage>
	</FlexSection>
);

export default Intro;
