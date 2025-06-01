import { Outlet } from "react-router";
import { Footer, Oefening as OefeningComp } from "../components";
export const Oefening = () => {
	return (
		<div className="padding">
			<Outlet />
			<OefeningComp />
			<Footer />
		</div>
	);
};
