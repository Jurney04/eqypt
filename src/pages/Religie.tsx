import { Outlet } from "react-router";
import { Footer, Religie as ReligieComp } from "../components";
export const Religie = () => {
	return (
		<div className="padding">
			<Outlet />
			<ReligieComp />
			<Footer />
		</div>
	);
};
