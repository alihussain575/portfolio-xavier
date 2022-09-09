import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

interface IProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
	<div className="min-h-screen flex flex-col">
		<Header />
		<Wrapper className="flex-grow">
			<main className="pt-16">{children}</main>
		</Wrapper>
		<Footer />
	</div>
);

export default Layout;
