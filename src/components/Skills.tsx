import Image from "next/image";
import skillsImage from "../assets/skills.svg";
import { urlFor } from "../lib/sanity";
import { ISkill } from "../types";
import FlexSection from "./FlexSection";
import FlexSectionImage from "./FlexSectionImage";
import FlexSectionText from "./FlexSectionText";
import SkillItem from "./SkillItem";

interface IProps {
	skills: ISkill[];
}

const Skills = ({ skills }: IProps) => (
	<FlexSection id="skills">
		<FlexSectionText>
			<h2 className="h2">My skills</h2>
			<p>
				The tools and technologies I use to bring my projects to life:
			</p>
			<ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-x-5 gap-y-7 text-xs">
				{skills.map((skill) => (
					<SkillItem
						title={skill.title}
						imageUrl={urlFor(skill.image).url()}
						key={skill.title}
					/>
				))}
			</ul>
		</FlexSectionText>
		<FlexSectionImage>
			<Image src={skillsImage} layout="fill" alt="skills" />
		</FlexSectionImage>
	</FlexSection>
);

export default Skills;
