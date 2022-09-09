import Wrapper from "./Wrapper";
import SocialLink from "./SocialLink";
import { IoMdMail } from "react-icons/io";
import { BsGithub, BsLinkedin, BsFillFilePdfFill } from "react-icons/bs";

const Footer = () => (
	<footer className="w-full py-6 mt-40 border-t border-zinc-100">
		<Wrapper className="flex items-center flex-col md:flex-row md:justify-between">
			<SocialLink
				href="mailto:kovach.daniil.js@gmail.com"
				title="kovach.daniil.js@gmail.com"
				Icon={<IoMdMail />}
			/>
			<div className="flex space-x-6 mt-4 md:mt-0">
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
		</Wrapper>
	</footer>
);

export default Footer;
