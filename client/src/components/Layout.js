import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar applicationName="WMS" groupName="Elmer Almeida" />
			<div id="main" className="">
				{children}
			</div>
		</div>
	);
};

export default Layout;
