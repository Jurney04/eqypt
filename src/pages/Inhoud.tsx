import { Outlet } from "react-router";
import { Beeldhouwkunst, Bouwkunst, Inhoud as InhoundComp, Schilderkunst, Schrift } from "../components";
export const Inhoud = () => {
	return (
		<div className="padding">
			<Outlet />
			<InhoundComp />
			<Bouwkunst />
			<Schilderkunst />
			<Beeldhouwkunst />
			<Schrift />
		</div>
	);
};
