import { Outlet } from "react-router";
import "../App.css";
import { Doelstellingen, Home, Referentiekader } from "../components";

function App() {
	return (
		<div className="home padding">
			<Outlet />
			<Home />
			<Referentiekader />
			<Doelstellingen />
		</div>
	);
}

export default App;
