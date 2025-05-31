import { Link, useLocation } from "react-router";
import "../styling/Header.css";

export const Header = () => {
	const location = useLocation();
	console.log(location);

	return (
		<div className="header">
			<Link to="/" className={location.pathname === "/" ? "clicked" : ""}>
				Home
			</Link>
			<Link to="/dagelijks-leven" className={location.pathname === "/dagelijks-leven" ? "clicked" : ""}>
				Dagelijks leven
			</Link>
			<Link to="/religie" className={location.pathname === "/religie" ? "clicked" : ""}>
				Religie
				{/* (Goden, Mummificatie) */}
			</Link>

			<Link to="/inhoud" className={location.pathname === "/inhoud" ? "clicked" : ""}>
				Kunst en cultuur
				{/* (Bouwkunst, Schilderkunst, beeldhouwkunst, Schrift) */}
			</Link>
			<Link to="/oefening" className={location.pathname === "/oefening" ? "clicked" : ""}>
				Oefeningen
			</Link>
			{/* referentiekader, doelstellingen */}
			<a href="https://www.funnygames.nl/spel/ancient_egypt_spot_the_differences.html" target="_blank" className="">
				<img src="/eye_of_rah.svg" className="logo" alt="" />
			</a>

			<div className="sidebar-left"></div>
			<div className="sidebar-right"></div>
		</div>
	);
};
