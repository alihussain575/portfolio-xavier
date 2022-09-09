import type { NextPage } from "next";
import About from "../components/About";
import Intro from "../components/Intro";

const Home: NextPage = () => (
	<>
		<Intro />
		<About />
	</>
);

export default Home;
