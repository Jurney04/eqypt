import { Outlet } from "react-router";
import "../App.css";
import { Doelstellingen, Footer, Home } from "../components";

function App() {
	return (
		<div className="home padding">
			<Outlet />
			<Home />
			<Doelstellingen />
			<Footer />
		</div>
	);
}

export default App;
