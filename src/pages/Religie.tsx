import { Outlet } from "react-router";
import { Goden, Mummificatie, Religie as ReligieComp } from "../components";
export const Religie = () => {
	return (
		<div className="padding">
			<Outlet />
			<ReligieComp />
			<Goden />
			<Mummificatie />
		</div>
	);
};
