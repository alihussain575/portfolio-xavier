import { Metadata } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import { commonMetadata } from "../utils/commonMetadata";
import SpareTime from "../components/SpareTime";

export const metadata: Metadata = {
	...commonMetadata
};

const Home = () => (
	<>
		<Intro />
		<About />
		<Skills />
		<FeaturedProjects />
		<SpareTime />
		<Contact />
	</>
);

export default Home;
