import { Outlet } from "react-router";
import { Footer, Inhoud as InhoundComp } from "../components";
export const Inhoud = () => {
	return (
		<div className="padding">
			<Outlet />
			<InhoundComp />
			<Footer />
		</div>
	);
};
