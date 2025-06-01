import { Outlet } from "react-router";
import { Dagelijksleven, Footer } from "../components";
export const DagelijksLeven = () => {
	return (
		<div className="padding">
			<Outlet />
			<Dagelijksleven />
			<Footer />
		</div>
	);
};
