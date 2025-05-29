import { Outlet } from "react-router";
import { Dagelijksleven } from "../components";
export const DagelijksLeven = () => {
	return (
		<div className="padding">
			<Outlet />
			<Dagelijksleven />
		</div>
	);
};
