import { Outlet } from "react-router";
import { Oefening as OefeningComp } from "../components";
export const Oefening = () => {
	return (
		<div className="padding">
			<Outlet />
			<OefeningComp />
		</div>
	);
};
