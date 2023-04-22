import { Metadata } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { commonMetadata } from "../utils/commonMetadata";

export const metadata: Metadata = {
	...commonMetadata
};

const Home = () => (
	<>
		<Intro />
		<About />
		<Skills />
		<FeaturedProjects />
		<Contact />
	</>
);

export default Home;
